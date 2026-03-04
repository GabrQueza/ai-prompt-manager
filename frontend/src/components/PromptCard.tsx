'use client';

import { 
  Box, 
  Text, 
  Heading, 
  Badge, 
  Button, 
  VStack, 
  HStack, 
  useClipboard, 
  useToast,
  useColorModeValue,
  Divider,
  IconButton,
  Spinner
} from '@chakra-ui/react';
import { Prompt, promptApi } from '../services/api';
import { useState } from 'react';

interface PromptCardProps {
  prompt: Prompt;
  onDeleteSuccess?: () => void;
}

export function PromptCard({ prompt, onDeleteSuccess }: PromptCardProps) {
  const { onCopy, hasCopied } = useClipboard(prompt.content);
  const toast = useToast();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleCopy = () => {
    onCopy();
    if (!hasCopied) {
      toast({
        title: 'Copied!',
        description: 'Prompt copied to clipboard',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this prompt?')) return;
    
    setIsDeleting(true);
    try {
      await promptApi.deletePrompt(prompt.id);
      toast({
        title: 'Deleted',
        description: 'Prompt has been successfully deleted.',
        status: 'info',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
      if (onDeleteSuccess) onDeleteSuccess();
    } catch (error) {
           toast({
        title: 'Error',
        description: 'Failed to delete prompt.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      setIsDeleting(false);
    }
  };

  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box 
      p={5} 
      shadow="md" 
      borderWidth="1px" 
      borderColor={borderColor}
      borderRadius="xl"
      bg={cardBg}
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
    >
      <VStack align="start" spacing={4} height="full">
        <HStack w="full" justify="space-between" align="start">
          <Heading size="md" noOfLines={2} lineHeight="tight">
            {prompt.title}
          </Heading>
          <HStack>
            <Badge colorScheme="purple" borderRadius="full" px={2} py={1}>
              {prompt.category}
            </Badge>
            <IconButton 
              aria-label="Delete Prompt"
              size="sm"
              variant="ghost"
              colorScheme="red"
              isLoading={isDeleting}
              onClick={handleDelete}
              icon={<Box as="span" fontSize="xs">❌</Box>}
            />
          </HStack>
        </HStack>

        <Divider borderColor={borderColor} />

        <Box flex="1" w="full" bg={useColorModeValue('gray.50', 'gray.900')} p={3} borderRadius="md" borderWidth="1px" borderColor={useColorModeValue('gray.100', 'gray.700')}>
          <Text fontSize="sm" color="gray.600" noOfLines={4} whiteSpace="pre-wrap">
            {prompt.content}
          </Text>
        </Box>

        <Button 
          w="full" 
          colorScheme={hasCopied ? 'green' : 'blue'} 
          variant={hasCopied ? 'solid' : 'outline'}
          onClick={handleCopy}
          size="sm"
        >
          {hasCopied ? 'Copied!' : 'Copy to Clipboard'}
        </Button>
      </VStack>
    </Box>
  );
}
