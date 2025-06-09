import React, { useEffect, useState } from "react";
import { FormControl, FormLabel, RadioGroup, HStack, Radio, Button, useToast } from "@chakra-ui/react";
import { useUser } from "@clerk/nextjs";

export default function AreaFormAlone({ isVisibleIn, onIsOk2Change }) {
  const [isVisible, setIsVisible] = useState(isVisibleIn);
  const [isLoading, setIsLoading] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [area, setArea] = useState("");
  const [subArea, setSubArea] = useState("");
  const { user } = useUser();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await user.update({
        unsafeMetadata: {
          area: area,
          subArea: subArea,
          extra: "if you are reading this, you should not be here, so, have a nice day",
        },
      });
      console.log(result);
      if (result !== null) {
        setIsLoading(false);
        setIsOk(true);
        toast({
          title: "Registration Successful",
          description: "You have successfully registered.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log("error seting area:", error);
      toast({
        title: "Error",
        description: error.message || "An error occurred during sign up",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
      setIsVisible(false);
    }
  };

  useEffect(() => {
    console.log(area);
    console.log(subArea);
    if (onIsOk2Change) {
      onIsOk2Change(isOk);
    }
  }, [isOk, onIsOk2Change, isVisibleIn, setArea, area]);

  return (
    <>
      {isVisibleIn ? (
        <form onSubmit={handleSubmit}>
          <FormControl as={"fieldset"} isRequired>
            <FormLabel as={"legend"}>Choose Area</FormLabel>
            <RadioGroup>
              <HStack value={area} onChange={(e) => setArea(e.target.value)}>
                <Radio value='testing'>Testing</Radio>
                <Radio value='mograph'>Mograph</Radio>
                <Radio value='dev'>Dev</Radio>
                <Radio value='shows'>Live Events</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          {area === "testing" ? (
            <FormControl as={"fieldset"} isRequired>
              <FormLabel as={"legend"}>Choose Role</FormLabel>
              <RadioGroup>
                <HStack value={subArea} onChange={(e) => setSubArea(e.target.value)}>
                  <Radio value='dev'>Dev</Radio>
                  <Radio value='tester'>tester</Radio>
                  <Radio value='viewer'>viewer</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
          ) : null}
          {area === "mograph" ? (
            <FormControl as={"fieldset"} isRequired>
              <FormLabel as={"legend"}>Choose Role</FormLabel>
              <RadioGroup>
                <HStack value={subArea} onChange={(e) => setSubArea(e.target.value)}>
                  <Radio value='producer'>Producer</Radio>
                  <Radio value='designer'>Designer</Radio>
                  <Radio value='viewer'>viewer</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
          ) : null}
          <Button type='submit' isLoading={isLoading} isDisabled={false} variant={"solid"} mt={4} w={"full"}>
            Confirm Area
          </Button>
        </form>
      ) : null}
    </>
  );
}
