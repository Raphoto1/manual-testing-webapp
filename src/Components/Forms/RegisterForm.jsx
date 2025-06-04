"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
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
import { useSignUp } from "@clerk/nextjs";

export default function RegisterForm() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modRef = useRef(null);
  const { signUp, isLoaded, setActive } = useSignUp();
  // data setters

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [area, setArea] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!isLoaded) return;
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signUp.create({
        emailAddress: email,
        password: password,
      });

      await signUp.updateUser({
        publicMetadata: {
          area: area,
        },
      });

      // Set the active session
      await setActive({ session: signUp.createdSessionId });
      router.push(`/platform/${area}`); // Redirect to home page or desired route
      // Close the modal after successful signup
      onClose();
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };
  return (
    <>
      <Button onClick={onOpen}>Register</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit} ref={modRef}>
              <FormControl isRequired>
                <FormLabel>email</FormLabel>
                <Input type='email' placeholder='dreamer@email.com' value={email} onChange={e => setEmail(e.target.value)} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>password</FormLabel>
                <Input type='password' value={password} onChange={e => setPassword(e.target.value)} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>confirm password</FormLabel>
                <Input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
              </FormControl>
              <FormControl as={"fieldSet"} isRequired>
                <FormLabel as={"legend"}>Choose Area</FormLabel>
                  <HStack value={area} onChange={e => setArea(e.target.value)}>
                    <Radio value='testing'>Testing</Radio>
                    <Radio value='mograph'>Mograph</Radio>
                    <Radio value='dev'>Dev</Radio>
                    <Radio value='shows'>Live Events</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              <Button type='submit' mt={4} w={"full"}>
                Register
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
