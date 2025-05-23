"use client";
//app
import React from "react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormLabel,
  Input,
  Select,
  Switch,
  Textarea,
  Box,
  useToast,
  FormControl,
} from "@chakra-ui/react";
//own
import BtnCustom from "../General/BtnCustom";
import handlePostText from "@/Hooks/handlePostText.hook";

export default function FakeUserForm() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataPack = {
      name: e.target["name"].value,
      lastName: e.target["lastName"].value,
      age: e.target["age"].value,
      phoneNumber: e.target["phoneNumber"].value,
      genre: e.target["genre"].value,
      email: e.target["email"].value,
    };
    const response = await handlePostText("/api/apps/fakeUser", formDataPack);
    if (response.status === 201) {
      toast({
        title: "Fake User created",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      onClose();
    } else {
      toast({
        title: "Error creating Fake User, please try again",
        description: response.error,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <BtnCustom onClick={onOpen} text={"New Fake User"} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Fake User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Fake Name</FormLabel>
                <Input isRequired type='Text' id='name' name='name' />
              </FormControl>
              <FormLabel>Fake Lastname</FormLabel>
              <Input type='Text' id='lastName' name='lastName' />
              <FormLabel>Age</FormLabel>
              <Input type='number' id='age' name='age' />
              <FormLabel>Phone Number</FormLabel>
              <Input type='number' id='phoneNumber' name='phoneNumber' />
              <FormLabel>Genre</FormLabel>
              <Input type='Text' id='genre' name='genre' />
              <FormLabel>Email</FormLabel>
              <Input type='email' id='email' name='email' />
              <Box display={"flex"} justifyContent={"end"} pt={2}>
                <BtnCustom text={"Create New Fake User"} type={"submit"} />
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
