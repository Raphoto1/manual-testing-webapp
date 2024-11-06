'use client'
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
} from "@chakra-ui/react";
//own
import BtnCustom from "../General/BtnCustom";

export default function FakeUserForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <BtnCustom onClick={onOpen} text={"New Fake User"} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Fake User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form action=''>
              <FormLabel>Fake Name</FormLabel>
              <Input type='Text' />
              <FormLabel>Fake Lastname</FormLabel>
              <Input type='Text' />
              <FormLabel>Age</FormLabel>
              <Input type='number' />
              <FormLabel>Phone Number</FormLabel>
              <Input type='number' />
              <FormLabel>Genre</FormLabel>
              <Input type='Text' />
              <FormLabel>Email</FormLabel>
              <Input type='email' />
              <Box display={"flex"} justifyContent={"end"} pt={2}>
                <BtnCustom text={"Create New Fake User"} />
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
