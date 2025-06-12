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
  useToast,
} from "@chakra-ui/react";

//own
import BtnCustom from "../General/BtnCustom";
import handlePostText from "@/Hooks/handlePostText.hook";
import { useUser } from "@clerk/nextjs";

export default function DevCreationForm() {
  const toast = useToast();
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryName, setCountryName] = useState("");
  const [selectedState, setSelectedState] = useState("Not available");
  const [selectedCity, setSelectedCity] = useState("Not available");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useUser();

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
    if (e.target["dni"].value === "" || e.target["devName"].value === "" || selectedCountry === "") {
      toast({
        title: "Error creating developer.",
        description: "Please fill all required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const formDataPack = {
      dni: e.target["dni"].value,
      dev_name: e.target["devName"].value,
      country: countries[selectedCountry].name,
      state: states[selectedState]?.name ? states[selectedState].name : "Not available",
      city: cities[selectedCity]?.name ? cities[selectedCity].name : "Not available",
      company: e.target[5].checked,
    };
    const response = await handlePostText("/api/apps/dev", formDataPack);
    // toast 409
    if (response.status === 201) {
      toast({
        title: "Developer created.",
        description: "Developer created successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
    } else if (response.status === 409) {
      toast({
        title: "Error creating developer.",
        description: "Developer already exists.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error creating developer.",
        description: "Error creating developer, please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
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
            <form onSubmit={handleSubmit}>
              <FormLabel>Document Number</FormLabel>
              <Input type='number' id='dni' name='dni' />
              <FormControl isRequired>
                <FormLabel>Dev Name</FormLabel>
                <Input required type='Text' id='devName' name='devName' />
              </FormControl>
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
              <BtnCustom text={"Submit new developer"} type={"submit"} />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
