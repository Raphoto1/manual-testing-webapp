"use client";
//app
import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import {
  Button,
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

//own
import BtnCustom from "../General/BtnCustom";
import handlePostText from "@/Hooks/handlePostText.hook";

export default function DevCreationForm() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryName, setCountryName] = useState("");
  const [selectedState, setSelectedState] = useState("Not available");
  const [selectedCity, setSelectedCity] = useState("Not available");
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
    setSelectedState(e.target.value);
    const listCities = City.getCitiesOfState(objectByIndex.countryCode, objectByIndex.isoCode);
    setCities(listCities);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataPack = {
      documentNumber: e.target["dni"].value,
      devName: e.target["devName"].value,
      country: countries[selectedCountry].name,
      state: states[selectedState]?.name ? states[selectedState].name : "Not available",
      city: cities[selectedCity]?.name ? cities[selectedCity].name : "Not available",
      company: e.target[5].checked,
    };
    const response = await handlePostText("/api/apps/dev", formDataPack);
    console.log("response", response);
    if (response) {
      console.log("response", response);
      onClose();
    }
    else {
      alert("Error creating developer");
    }
  }


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
            <form onSubmit={handleSubmit}>
              <FormLabel>Document Number</FormLabel>
              <Input type='number' id='dni' name='dni' />
              <FormLabel>Dev Name</FormLabel>
              <Input required type='Text' id='devName' name='devName' />
              <FormLabel>Country</FormLabel>
              <Select required id='country' name='country' value={selectedCountry} onChange={handleCountryChange} placeholder={"choose a country"}>
                {countries.map((country, index) => (
                  <option key={index} value={index}>
                    {country.name}
                  </option>
                ))}
              </Select>
              <FormLabel>State</FormLabel>
              <Select name='state' id='state' value={selectedState} onChange={handleStatesChange} placeholder={"choose a state if available"}>
                {states.map((state, index) => (
                  <option key={index} value={index}>
                    {state.name}
                  </option>
                ))}
              </Select>
              <FormLabel>City</FormLabel>
              <Select name='city' id='city' value={selectedCity} onChange={handleCityChange} placeholder='choose a city if available'>
                {cities.map((city, index) => (
                  <option key={index} value={index}>
                    {city.name}
                  </option>
                ))}
              </Select>
              <FormControl display={"flex"} alignItems={"center"} py={"4"}>
                <FormLabel htmlFor='company' mb='0'>
                  Company
                </FormLabel>
                <Switch id='company' name='company' defaultChecked={false} />
              </FormControl>
              <Button type='submit' bgGradient={"linear(to-r, purple.500, pink.500)"} className='w-1/6' size={"xs"} rounded={"full"} w={"fit-content"}>
                Submit new developer
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
