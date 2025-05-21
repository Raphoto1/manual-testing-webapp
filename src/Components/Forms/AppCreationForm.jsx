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
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react";
//own
import BtnCustom from "../General/BtnCustom";

export default function AppCreationForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <BtnCustom onClick={onOpen} text={"New App"} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New App</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form action=''>
              <FormLabel>Platform Name</FormLabel>
              <Input type='Text' />
              <FormLabel>Description</FormLabel>
              <Textarea placeholder='description' />
              <FormLabel>Platforms</FormLabel>
              <Stack spacing={5} direction={'row'}>
                <Checkbox>plat 1</Checkbox>
                <Checkbox>plat 2</Checkbox>
              </Stack>
              <FormLabel>Assign Fake User</FormLabel>
              <Stack spacing={5} direction={'row'}>
                <Checkbox>User 1</Checkbox>
                <Checkbox>User 2</Checkbox>
              </Stack>
              <FormLabel>Current Version</FormLabel>
              <Input type='Text' />
              <FormLabel>Available Context</FormLabel>
              <Stack spacing={5} direction={'row'}>
                <Checkbox>Context 1</Checkbox>
                <Checkbox>Context 2</Checkbox>
              </Stack>
              <FormLabel>App Status</FormLabel>
              <Input type='Text' />
              <FormLabel>Reference capture</FormLabel>
              <Input type='file' size={'xs'}/>
              <Box display={"flex"} justifyContent={"end"} pt={2}>
                <BtnCustom text={"Create New Platform"} />
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
