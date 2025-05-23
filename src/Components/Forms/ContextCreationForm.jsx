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
  useToast,
} from "@chakra-ui/react";
//own
import BtnCustom from "../General/BtnCustom";
import handlePostText from "@/Hooks/handlePostText.hook";

export default function ContextCreationForm() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataPack = {
      mobile: e.target["mobile"].checked,
      web: e.target["web"].checked,
      mobileCarrier: e.target["mobileCarrier"].value,
      lineNumber: e.target["lineNumber"].value,
      contractType: e.target["contractType"].value,
      signalStrength: e.target["signalStrength"].value,
      connectionSpeed: e.target["connectionSpeed"].value,
      platform: e.target["platform"].value,
    };
    const response = await handlePostText("/api/apps/context", formDataPack);
    if (response.status === 201) {
      toast({
        title: "Context Created",
        description: response.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      onClose();
    } else {
      toast({
        title: "Error",
        description: response.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <BtnCustom onClick={onOpen} text={"New Context"} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Context</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl display={"flex"} alignItems={"center"} py={"4"}>
                <FormLabel htmlFor='mobile' mb='0'>
                  Mobile
                </FormLabel>
                <Switch
                  id='mobile'
                  defaultChecked={false}
                />
              </FormControl>
              <FormControl display={"flex"} alignItems={"center"} py={"4"}>
                <FormLabel htmlFor='web' mb='0'>
                  Web
                </FormLabel>
                <Switch id='web' defaultChecked={false} />
              </FormControl>
              <FormLabel>Mobile Carrrier</FormLabel>
              <Input type='Text' id='mobileCarrier' name='mobileCarrier' />
              <FormLabel>Line Number</FormLabel>
              <Input type='number' id='lineNumber' name='lineNumber' />
              <FormLabel>Contract Type</FormLabel>
              <Input type='Text' id='contractType' name='contractType' />
              <FormLabel>Signal Strength</FormLabel>
              <Input type='number' id='signalStrength' name='signalStrength' />
              <FormLabel>Connection Speed</FormLabel>
              <Input type='number' id='connectionSpeed' name='connectionSpeed' />
              <FormLabel>Platform, to add later!!!</FormLabel>
              <Input type='Text' id='platform' name='platform' />
              <Box display={"flex"} justifyContent={"end"} pt={2}>
                <BtnCustom text={"Create New Context"} type={"submit"} />
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
