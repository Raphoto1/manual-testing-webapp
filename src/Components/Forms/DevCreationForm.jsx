"use client";
//app
import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";

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
import { list } from "postcss";

export default function DevCreationForm() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryName, setCountryName] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCountryChange = (e) => {
    const objectByIndex = countries[e.target.value];
    setSelectedCountry(e.target.value);
    setCountryName(objectByIndex.name);
    const statesList = State.getStatesOfCountry(objectByIndex.isoCode);
    setStates(statesList);
  };

  const handleStatesChange = (e) => {
    const objectByIndex = states[e.target.value];
    console.log(objectByIndex);
    setSelectedState(e.target.value);
    const listCities = City.getCitiesOfState(objectByIndex.countryCode, objectByIndex.isoCode);
    console.log(listCities);
    setCities(listCities);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  useEffect(() => {
    const countryData = Country.getAllCountries();

    setCountries(countryData);
  }, []);

  return (
    <>
      <BtnCustom onClick={onOpen} text={"New Developer"} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Developer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form action=''>
              <FormLabel>Document Number</FormLabel>
              <Input type='number' />
              <FormLabel>Dev Name</FormLabel>
              <Input type='Text' />
              <FormLabel>Country</FormLabel>
              <Select id='country' name='country' value={selectedCountry} onChange={handleCountryChange}>
                {countries.map((country, index) => (
                  <option key={index} value={index}>
                    {country.name}
                  </option>
                ))}
              </Select>
              <FormLabel>State</FormLabel>
              <Select name='state' id='state' onChange={handleStatesChange}>
                {states.map((state, index) => (
                  <option key={index} value={index}>
                    {state.name}
                  </option>
                ))}
              </Select>
              <FormLabel>City</FormLabel>
              <Select name='city' id='city' onChange={handleCityChange}>
                {cities.map((city, index) => (
                  <option key={index} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </Select>
              <FormControl display={"flex"} alignItems={"center"} py={"4"}>
                <FormLabel htmlFor='company' mb='0'>
                  Company
                </FormLabel>
                <Switch id='company' />
              </FormControl>
              <BtnCustom text={"Create New Dev"} />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
