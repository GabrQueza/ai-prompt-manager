'use client';

import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  Container,
  VStack,
  useColorModeValue,
  Divider,
  SimpleGrid,
  Button,
  useDisclosure,
  Spinner,
  Center
} from '@chakra-ui/react';
import { PromptCard } from '@/components/PromptCard';
import { CreatePromptModal } from '@/components/CreatePromptModal';
import { Prompt, promptApi } from '@/services/api';
import { useEffect, useState } from 'react';

export default function Home() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const loadPrompts = async () => {
    setIsLoading(true);
    try {
      const data = await promptApi.fetchPrompts();
      setPrompts(data);
    } catch (error) {
      console.error('Failed to load prompts', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPrompts();
  }, []);

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const headerBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* Header */}
      <Box 
        bg={headerBg} 
        borderBottom="1px" 
        borderColor={borderColor}
        py={4}
        position="sticky"
        top={0}
        zIndex={10}
        boxShadow="sm"
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Flex align="center" gap={3}>
              <Box 
                bgGradient="linear(to-r, blue.400, purple.500)" 
                w={8} 
                h={8} 
                borderRadius="md" 
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontWeight="bold"
                fontSize="xl"
              >
                AI
              </Box>
              <Heading size="md" fontWeight="bold" letterSpacing="tight">
                Prompt Vault
              </Heading>
            </Flex>
            <Button colorScheme="purple" size="sm" onClick={onOpen}>
              + New Prompt
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading size="lg" mb={2}>Dashboard</Heading>
            <Text color="gray.500">Manage and organize your best AI prompts.</Text>
          </Box>
          <Divider borderColor={borderColor} />

          {isLoading ? (
            <Center py={20}>
              <Spinner size="xl" color="purple.500" thickness="4px" />
            </Center>
          ) : prompts.length === 0 ? (
            <Box 
              p={10} 
              borderWidth="1px" 
              borderColor={borderColor} 
              borderRadius="xl"
              borderStyle="dashed"
              bg={useColorModeValue('white', 'gray.800')}
              textAlign="center"
            >
              <Text color="gray.500" mb={4}>No prompts found. Your vault is empty!</Text>
              <Button colorScheme="blue" onClick={onOpen}>Create your first prompt</Button>
            </Box>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {prompts.map((prompt) => (
                <PromptCard 
                  key={prompt.id} 
                  prompt={prompt} 
                  onDeleteSuccess={loadPrompts} 
                />
              ))}
            </SimpleGrid>
          )}

        </VStack>
      </Container>
      
      {/* Create Modal */}
      <CreatePromptModal 
        isOpen={isOpen} 
        onClose={onClose} 
        onSuccess={loadPrompts} 
      />
    </Box>
  );
}

