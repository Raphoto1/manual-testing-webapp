import React, { use } from "react";
import { useRef, useState, useEffect } from "react";
import { FormControl, Input, FormLabel, RadioGroup, HStack, Radio, Button, useToast } from "@chakra-ui/react";
import { useSignUp } from "@clerk/nextjs";

function RegisterFormAlone({ onIsOkChange }) {
  const [ isOk, setIsOk ] = useState(false);
  const toast = useToast();
  const modRef = useRef(null);
  const { signUp, isLoaded, setActive } = useSignUp();
  // data setters
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const chkIsOk = () => {
    if (password && confirmPassword && email) {
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!isLoaded) return;
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const result = await signUp.create({
        emailAddress: email,
        password: password,
      });
      if (result.status === "complete") {
        // If the sign-up is complete, set the active session and redirect
        await setActive({ session: signUp.createdSessionId });
        toast({
          title: "Registration Successful",
          description: "You have successfully registered.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      setError("An error occurred during registration. Please try again.");
      toast({
        title: "Error",
        description: error.message || "An error occurred during registration.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    chkIsOk();
  }, [email, password, confirmPassword]);
    
    useEffect(() => {
    if (onIsOkChange) {
      onIsOkChange(isOk);
    }
  }, [isOk, onIsOkChange]);
  return (
    <>
      <form onSubmit={handleSubmit} ref={modRef}>
        <FormControl isRequired>
          <FormLabel>email</FormLabel>
          <Input type='email' placeholder='dreamer@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>password</FormLabel>
          <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>confirm password</FormLabel>
          <Input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </FormControl>
        <div id='clerk-captcha' />
        <Button type='submit' mt={4} w={"full"}>
          Register
        </Button>
      </form>
    </>
  );
}

export default RegisterFormAlone;
