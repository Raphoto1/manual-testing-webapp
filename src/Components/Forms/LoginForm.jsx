"use client";
import { useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  Input,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { useSignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const modRef = useRef(null);
  const { signIn, isLoaded, setActive } = useSignIn();
  const { user } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [showReset, setShowReset] = useState(false);
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [userArea, setUserArea] = useState("");
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!isLoaded) return;
    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        setTimeout(() => {
          const user = window.Clerk?.user;
          const area = user?.publicMetadata?.area || "";
          toast({
            title: "Login Successful",
            description: `Redirecting...`,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          router.push(`/platform/${area}`);
        }, 500);
        onClose();
      } else {
        setError("Login not complete.");
      }
    } catch (err) {
      setError(err.errors ? err.errors[0].message : "Login failed");
      toast({
        title: "Error",
        description: err.errors ? err.errors[0].message : "Login failed",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  // Forgot password handler
  const handleForgot = async (e) => {
    e.preventDefault();
    setError("");
    if (!isLoaded) return;
    try {
      await signIn.create({
        strategy: "reset_password_email_code",
        identifier: forgotEmail,
      });
      toast({
        title: "Recovery Email Sent",
        description: "Check your inbox for password reset instructions.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setShowForgot(false);
      setShowReset(true);
    } catch (err) {
      setError(err.errors ? err.errors[0].message : "Failed to send recovery email");
      toast({
        title: "Error",
        description: err.errors ? err.errors[0].message : "Failed to send recovery email",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  //reset handler
  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    if (!isLoaded) return;
    try {
      const result = await signIn.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code: resetCode,
        password: newPassword,
      });
      console.log("RESULT DE RESET", result);
      setShowReset(false);
      setShowForgot(false);
      setResetCode("");
      setNewPassword("");
      setError("");
      toast({
        title: "Password Reset",
        description: "Your password has been updated. Please log in.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setTimeout(() => {
      window.location.reload();
    }, 1200);
    } catch (err) {
      setError(err.errors ? err.errors[0].message : "Failed to reset password");
      toast({
        title: "Error",
        description: err.errors ? err.errors[0].message : "Failed to reset password",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Login Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {showReset ? (
              <form onSubmit={handleReset}>
                <FormControl isRequired>
                  <FormLabel>Code from Email</FormLabel>
                  <Input value={resetCode} onChange={(e) => setResetCode(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>New Password</FormLabel>
                  <Input type='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </FormControl>
                {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
                <Button type='submit' mt={4} w='full'>
                  Reset Password
                </Button>
                <Button mt={4} w='full' variant='link' onClick={() => setShowReset(false)}>
                  Back
                </Button>
              </form>
            ) : !showForgot ? (
              <form onSubmit={handleSubmit} ref={modRef}>
                <FormControl isRequired>
                  <FormLabel>email</FormLabel>
                  <Input type='email' placeholder='dreamer@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>password</FormLabel>
                  <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
                <Button type='submit' mt={4} w={"full"}>
                  Login
                </Button>
                <Button mt={4} w={"full"} variant='link' onClick={() => setShowForgot(true)}>
                  Forgot Password?
                </Button>
              </form>
            ) : (
              <form onSubmit={handleForgot}>
                <FormControl isRequired>
                  <FormLabel>Enter your email</FormLabel>
                  <Input type='email' value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} />
                </FormControl>
                {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
                <Button type='submit' mt={4} w={"full"}>
                  Send Recovery Email
                </Button>
                <Button mt={4} w={"full"} variant='link' onClick={() => setShowForgot(false)}>
                  Back to Login
                </Button>
              </form>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
