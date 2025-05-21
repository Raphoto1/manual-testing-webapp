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

export default function PlatformCreationForm() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <BtnCustom onClick={onOpen} text={"New Platform"} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Platform</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form action=''>
              <FormLabel>Platform Name</FormLabel>
              <Input type='Text' />
              <FormLabel>Version</FormLabel>
              <Input type='Text' />
              <Box display={"flex"} justifyContent={"end"} pt={2}>
                <BtnCustom text={"Create New Platform"} />
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
