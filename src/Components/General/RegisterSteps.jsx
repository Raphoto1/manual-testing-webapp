import React, { useEffect, useRef, useState } from "react";
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
//imports propios
import RegisterFormAlone from "../Forms/Alone/RegisterFormAlone";
import AreaFormAlone from "../Forms/Alone/AreaFormAlone";
function RegisterSteps() {
  //controls
  const [step1IsOk, setStep1IsOk] = useState(false);
  const [activeStep2, setActiveStep2] = useState(false);
  const [step2IsOk, setStep2IsOk] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modRef = useRef(null);
  //list steps
  const steps = [
    {
      title: "Step 1: Enter your details",
      description: "Fill in your email and password.",
      component: (
        <RegisterFormAlone
          onIsOkChange={(value) => {
            setStep1IsOk(value);
          }}
        />
      ),
    },
    {
      title: "Step 2: Set Area To Work",
      description: "What Multipotential skill are we going to work",
      component: (
        <AreaFormAlone
          onIsOk2Change={(value) => {
            setStep2IsOk(value);
          }
        }
        isVisibleIn={activeStep2}
        />
      ),
    },
    { title: "Step 3: Complete your profile", description: "Final Details." },
  ];
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    steps: steps.length,
  });
  //check step results
  const chkNextStepReady = () => {
    if (activeStep === 0 && step1IsOk) {
      setActiveStep(activeStep + 1);
      setActiveStep2(true);
      console.log("step2 from register steps", activeStep2);
    }
  };

  useEffect(() => {
    chkNextStepReady();
  }, [step1IsOk, setActiveStep, step2IsOk]);

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
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant={nextActive ? "blue" : "ghost"} isDisabled={!nextActive} onClick={() => setActiveStep(activeStep + 1)}>
              Next
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default RegisterSteps;
