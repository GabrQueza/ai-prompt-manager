'use client';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import { promptApi, CreatePromptData } from '../services/api';

interface CreatePromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function CreatePromptModal({ isOpen, onClose, onSuccess }: CreatePromptModalProps) {
  const [formData, setFormData] = useState<CreatePromptData>({
    title: '',
    category: '',
    content: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.category || !formData.content) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all fields.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);
    try {
      await promptApi.createPrompt(formData);
      toast({
        title: 'Success!',
        description: 'New prompt added to your vault.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
      setFormData({ title: '', category: '', content: '' });
      onSuccess();
      onClose();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create prompt. Make sure the backend is running.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay backdropFilter="blur(4px)" />
      <ModalContent as="form" onSubmit={handleSubmit}>
        <ModalHeader>Create New Prompt</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input 
                name="title" 
                placeholder="e.g., Explain Quantum Computing..." 
                value={formData.title}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Category</FormLabel>
              <Input 
                name="category" 
                placeholder="e.g., Education, Coding, Writing" 
                value={formData.category}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Content</FormLabel>
              <Textarea 
                name="content" 
                placeholder="Write your detailed prompt here..." 
                rows={6}
                value={formData.content}
                onChange={handleChange}
              />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose} isDisabled={isLoading}>
            Cancel
          </Button>
          <Button 
            colorScheme="blue" 
            type="submit" 
            isLoading={isLoading} 
            loadingText="Saving..."
          >
            Save Prompt
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
