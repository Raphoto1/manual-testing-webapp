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
  FormControl,
} from "@chakra-ui/react";
//own
import BtnCustom from "../General/BtnCustom";

export default function ContextCreationForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <BtnCustom onClick={onOpen} text={"New Context"} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Context</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form action=''>
              <FormControl display={"flex"} alignItems={"center"} py={"4"}>
                <FormLabel htmlFor='mobile' mb='0'>
                  Mobile
                </FormLabel>
                <Switch id='mobile' />
              </FormControl>
              <FormControl display={"flex"} alignItems={"center"} py={"4"}>
                <FormLabel htmlFor='web' mb='0'>
                  Web
                </FormLabel>
                <Switch id='mobile' />
              </FormControl>
              <FormLabel>Mobile Carrrier</FormLabel>
              <Input type='Text' />
              <FormLabel>Line Number</FormLabel>
              <Input type='number' />
              <FormLabel>Contract Type</FormLabel>
              <Input type='Text' />
              <FormLabel>Signal Strength</FormLabel>
              <Input type='number' />
              <FormLabel>Connection Speed</FormLabel>
              <Input type='number' />
              <FormLabel>Platform, to add later!!!</FormLabel>
              <Input type='Text' />
              <Box display={"flex"} justifyContent={"end"} pt={2}>
                <BtnCustom text={"Create New Context"} />
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
