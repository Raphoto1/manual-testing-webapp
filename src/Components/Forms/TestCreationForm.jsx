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

export default function TestCreationForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <BtnCustom onClick={onOpen} text={"New Test"} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Test</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form action=''>
              <FormLabel>Test Name</FormLabel>
              <Input type='Text' />
              <FormLabel>Description</FormLabel>
              <Textarea placeholder='description' />
              <FormLabel>Assign App to test</FormLabel>
              <Stack spacing={5} direction={"row"}>
                <Checkbox>App 1</Checkbox>
                <Checkbox>App 2</Checkbox>
              </Stack>
              <FormLabel>Assign Fake User</FormLabel>
              <Stack spacing={5} direction={"row"}>
                <Checkbox>User 1</Checkbox>
                <Checkbox>User 2</Checkbox>
                          </Stack>
                          <FormLabel>Assign Context</FormLabel>
              <Stack spacing={5} direction={"row"}>
                <Checkbox>Context 1</Checkbox>
                <Checkbox>Context 2</Checkbox>
                          </Stack>
                          <FormLabel>Test Type</FormLabel>
                          <Select placeholder='Choose a type' id="testType">
                              <option value="online">On line</option>
                              <option value="offline">Off line</option>
                              <option value="wifi">Wifi</option>
                              <option value="mobile network">Mobile Network</option>
                          </Select>
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
