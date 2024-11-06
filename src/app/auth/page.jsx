//app
import React from "react";
import { Box } from "@chakra-ui/react";
//own
import LoginForm from "@/Components/Forms/LoginForm";
import SignInForm from "@/Components/Forms/SignInForm";

export default function auth() {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} alignContent={"center"} w={"full"} minH={"100hv"}>
        <LoginForm />
        <SignInForm />
      </Box>
    </>
  );
}
