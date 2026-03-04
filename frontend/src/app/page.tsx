'use client';

import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  IconButton, 
  Container,
  VStack,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';

export default function Home() {
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

          {/* Placeholder for future Prompt List & Create Form */}
          <Box 
            p={10} 
            borderWidth="1px" 
            borderColor={borderColor} 
            borderRadius="xl"
            borderStyle="dashed"
            bg={useColorModeValue('white', 'gray.800')}
            textAlign="center"
          >
            <Text color="gray.500">Your prompts will appear here.</Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
