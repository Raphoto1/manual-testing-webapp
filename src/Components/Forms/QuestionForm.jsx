"use client";
//app
import React, { useState } from "react";
//own
import BtnCustom from "../General/BtnCustom";
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
  FormControl,
  Textarea,
    NumberInput,
    FormErrorMessage,
  FormHelperText
} from "@chakra-ui/react";

export default function QuestionForm() {
  const [typeChoosed, setTypeChoosed] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <BtnCustom onClick={onOpen} text={"New Question"} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Question</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form action=''>
              <FormLabel>Type Of Question</FormLabel>
              <Select placeholder='Choose a type' id={"qType"} name='qType' onChange={(e) => setTypeChoosed(e.target.value)}>
                <option value='boolean'>Boolean</option>
                <option value='text'>Text</option>
                <option value='number'>number</option>
              </Select>
              <FormLabel>Question</FormLabel>
              <Textarea placeholder='question' />
                          <FormLabel>Answer Spected</FormLabel>
                          {typeChoosed?null:<FormLabel color={'red.400'} display={'flex'} justifyContent={'center'}>Choose a type</FormLabel>}
              {typeChoosed === "boolean" ? <Switch id='spectedAnswer' /> : null}
              {typeChoosed === "text" ? <Textarea id='spectedAnswer' placeholder='spectedAnswer' /> : null}
              {typeChoosed === "number" ? <Input id='spectedAnswer' type='number' /> : null}
              <FormLabel>Reference capture</FormLabel>
              <Input type='file' size={'xs'}/>
              <BtnCustom text={"Create New Dev"} />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}