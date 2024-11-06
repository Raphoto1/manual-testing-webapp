"use client";
//app
import React, { useEffect, useState } from "react";
import { Country } from "country-state-city";
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
} from "@chakra-ui/react";

export default function UserCreationForm() {
  const [countrySelected, setCountrySelected] = useState("");
  const [countryList, setCountryList] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCountryChange = (e) => {};

  useEffect(() => {
    const countryData = Country.getAllCountries();
    setCountryList(countryData);
  }, []);
  return (
    <>
      <BtnCustom onClick={onOpen} text={"AdminUser"} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Administration</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form action=''>
              <FormLabel>First Name</FormLabel>
              <Input type='text' />
              <FormLabel>Last Name</FormLabel>
              <Input type='text' />
              <FormLabel>Personal Document</FormLabel>
              <Input type='number' />
              <FormLabel>Email</FormLabel>
              <Input type='email' />
              <FormLabel>Your Role</FormLabel>
              <Input type='text' placeholder='Tester, dev, manager, jedi, sith...' />
              <FormLabel>Country</FormLabel>
              <Select id='country' name='country' value={countrySelected} onChange={handleCountryChange} pb={4}>
                {countryList.map((country, index) => (
                  <option key={index} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </Select>
              <BtnCustom text={"Update Dev Data"} />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
