"use client";
import React, { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";

export default function LoginForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modRef = useRef(null);

  return (
    <>
      <Button onClick={onOpen}>Login Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <FormControl isRequired>
                <FormLabel>email</FormLabel>
                <Input type='email' placeholder='dreamer@email.com' />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>password</FormLabel>
                <Input type='password' />
              </FormControl>
              <Button type='submit' mt={4} w={"full"}>
                Login
              </Button>
              <Button mt={4} w={"full"}>
                Forgot Password?
              </Button>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
