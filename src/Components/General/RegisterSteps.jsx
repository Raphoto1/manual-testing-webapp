import React, { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  useDisclosure,
  FormControl,
  Input,
  FormLabel,
  RadioGroup,
  HStack,
  Radio,
  useToast,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

import RegisterFormAlone from "../Forms/Alone/RegisterFormAlone";
function RegisterSteps() {
  const steps = [
    {
      title: "Step 1: Enter your details", description: "Fill in your email and password.", component: <RegisterFormAlone onIsOkChange={(value) => console.log('incomingOK ${}',value)}/> },
    { title: "Step 2: Confirm your email", description: "Check your inbox for a confirmation link." },
    { title: "Step 3: Complete your profile", description: "Final Details." },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modRef = useRef(null);
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    steps: steps.length,
  });
  return (
    <>
      <Button onClick={onOpen}>RegisterSTP</Button>
      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={modRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stepper index={activeStep} orientation='vertical' colorScheme='blue' size={"sm"}>
              {steps.map((step, index) => (
                <Step key={index} onClick={() => setActiveStep(index)}>
                  <StepIndicator>
                    <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
                  </StepIndicator>
                  <Box flexShrink='0'>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                    <Box>{step.component}</Box>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={() => setActiveStep(activeStep + 1)}>
              Next
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default RegisterSteps;
