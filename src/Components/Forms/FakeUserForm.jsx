"use client";
//app
import React, { useState } from "react";
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
  //get app and dev
  const { selectedApp, setSelectedApp } = useState("");
  const { selectedDeveloper, setSelectedDeveloper } = useState("");
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
      user_id: 1, // This should be replaced with the actual user ID logic
      app: e.target["app"].value,
      developer: e.target["developer"].value,
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
              <FormLabel>Select Developer</FormLabel>
              <Select id='developer' name='developer' value={selectedDeveloper} placeholder='Select Developer'>
                <option value='dev1'>Default developer assigned to user</option>
                <option value='dev2'>Developer 2</option>
                <option value='dev3'>Developer 3</option>
              </Select>
              <FormLabel>Select App</FormLabel>
              <Select id='app' name='app' value={selectedApp} placeholder='Select App'>
                <option value='app1'>App 1</option>
                <option value='app2'>App 2</option>
                <option value='app3'>App 3</option>
              </Select>
              <FormControl isRequired>
                <FormLabel>Fake Name</FormLabel>
                <Input isRequired type='Text' id='name' name='name' />
              </FormControl>
              <FormLabel>Fake Password</FormLabel>
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
