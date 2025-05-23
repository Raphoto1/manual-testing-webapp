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
  useToast
} from "@chakra-ui/react";
//own
import BtnCustom from "../General/BtnCustom";
import handlePostText from "@/Hooks/handlePostText.hook";
export default function PlatformCreationForm() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataPack = {
      platformName: e.target["platformName"].value,
      version: e.target["version"].value,
    };
    const response = await handlePostText("/api/apps/platform", formDataPack);
    if (response.status === 201) {
      toast({
        title: "Platform created",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      onClose();
    } else {
      toast({
        title: "Error creating platform, please try again",
        description: response.error,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <BtnCustom onClick={onOpen} text={"New Platform"} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Platform</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormLabel>Platform Name</FormLabel>
              <Input type='Text' id="platformName" name="platformName"/>
              <FormLabel>Version</FormLabel>
              <Input type='Text' id="version" name="version"/>
              <Box display={"flex"} justifyContent={"end"} pt={2}>
                <BtnCustom text={"Create New Platform"} type={'submit'}/>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
