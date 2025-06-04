//app
import React from "react";
import { Box } from "@chakra-ui/react";
//own
import LoginForm from "@/Components/Forms/LoginForm";
import RegisterForm from "@/Components/Forms/RegisterForm";

export default function auth() {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} alignContent={"center"} w={"full"} minH={"100hv"}>
        <LoginForm />
        <RegisterForm />
      </Box>
    </>
  );
}
