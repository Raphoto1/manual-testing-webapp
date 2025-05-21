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
  RadioGroup,
  HStack,
  Radio,
} from "@chakra-ui/react";

export default function SignInForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modRef = useRef(null);

  return (
    <>
      <Button onClick={onOpen}>SignIn Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>SignIn</ModalHeader>
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
              <FormControl isRequired>
                <FormLabel>confirm password</FormLabel>
                <Input type='password' />
              </FormControl>
              <FormControl as={"fieldSet"} isRequired>
                <FormLabel as={"legend"}>Choose One</FormLabel>
                <RadioGroup>
                  <HStack>
                    <Radio value='testing'>Testing</Radio>
                    <Radio value='mograph'>Mograph</Radio>
                    <Radio value='dev'>Dev</Radio>
                    <Radio value='shows'>Live Events</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              <Button type='submit' mt={4} w={"full"}>
                Signin
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
