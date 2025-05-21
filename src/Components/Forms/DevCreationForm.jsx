"use client";
//app
import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
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

//own
import BtnCustom from "../General/BtnCustom";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit entro 2");
    console.log(cities[selectedCity]);
    console.log(e.target[3].value);
    
    
    const formDataPack = {
      documentNumber: e.target["dni"].value,
      devName: e.target["devName"].value,
      country: countries[selectedCountry].name,
      state: states[selectedState]?.name? states[selectedState].name : "Not available",
      city: cities[selectedCity]?.name? cities[selectedCity].name : "Not available",
      company: e.target[5].checked,
    };
    console.log("handleSubmit entro");

    console.log(formDataPack);
    fetch("/api/apps/dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataPack),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        onClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
              <FormLabel>Dev Name</FormLabel>
              <Input required type='Text' id='devName' name='devName' />
              <FormLabel>Country</FormLabel>
              <Select required  id='country' name='country' value={selectedCountry} onChange={handleCountryChange} placeholder={"choose a country"}>
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
              <Select name='city' id='city' value={selectedCity} onChange={handleCityChange} placeholder="choose a city if available">
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
                <Switch id='company' name="company" defaultChecked={false} />
              </FormControl>
              <button type="submit">submit</button>
              <BtnCustom text={"Create New Dev"} type="submit" onClick={handleSubmit}/>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
