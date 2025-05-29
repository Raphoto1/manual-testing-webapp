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
import handlePostAttatch from "@/Hooks/handlePostAttatch.hook";

export default function QuestionForm() {
  const toast = useToast();
  const [typeChoosed, setTypeChoosed] = useState("");
  const [switchValue, setSwitchValue] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async (e) => {
    // con el auth ya se agrega el userId
    e.preventDefault();
    const formDataPack = {
      question: e.target["question"].value,
      qType: e.target["qType"].value,
      spectedAnswer: typeChoosed === "boolean" ? switchValue : e.target["spectedAnswer"].value,
      file: e.target["fileName"].files[0],
      userId: 1,
    };
    const formData = new FormData();
    for (const key in formDataPack) {
      formData.append(key, formDataPack[key]);
    }
    const response = await handlePostAttatch("/api/apps/questions", formData);
    if (response.status === 201) {
      toast({
        title: "Question created",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      onClose();
    } else {
      toast({
        title: "Error creating question, please try again",
        description: response.error,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <BtnCustom onClick={onOpen} text={"New Question"} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Question</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel required>Type Of Question</FormLabel>
                <Select required placeholder='Choose a type' id={"qType"} name='qType' onChange={(e) => setTypeChoosed(e.target.value)}>
                  <option value='boolean'>Boolean</option>
                  <option value='text'>Text</option>
                  <option value='number'>number</option>
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Question</FormLabel>
                <Textarea placeholder='question' id='question' name='question' />
              </FormControl>
              <FormLabel>Answer Spected</FormLabel>
              {typeChoosed ? null : (
                <FormLabel color={"red.400"} display={"flex"} justifyContent={"center"}>
                  Choose a type
                </FormLabel>
              )}
              {typeChoosed === "boolean" ? <Switch id='spectedAnswer' isChecked={switchValue} onChange={(e) => setSwitchValue(e.target.checked)} /> : null}
              {typeChoosed === "text" ? <Textarea id='spectedAnswer' placeholder='spectedAnswer' /> : null}
              {typeChoosed === "number" ? <Input id='spectedAnswer' type='number' /> : null}

              <FormLabel>Reference capture</FormLabel>
              <Input type='file' size={"xs"} id='fileName' name='fileName' />
              <Box display={"flex"} justifyContent={"end"} pt={2}>
                <BtnCustom text={"Create New Dev"} type={"submit"} />
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
