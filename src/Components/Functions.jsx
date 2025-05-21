//app
import React from "react";
//own
import BtnCustom from "./General/BtnCustom";
import DevCreationForm from "./Forms/DevCreationForm";
import UserCreationForm from "./Forms/UserCreationForm";
import QuestionForm from "./Forms/QuestionForm";
import FakeUserForm from "./Forms/FakeUserForm";
import PlatformCreationForm from "./Forms/PlatformCreationForm";
import ContextCreationForm from "./Forms/ContextCreationForm";
import AppCreationForm from "./Forms/AppCreationForm";
import TestCreationForm from "./Forms/TestCreationForm";
export default function Functions() {
  return (
    <div className='flex justify-between p-2 gap-2'>
      <DevCreationForm />
      <UserCreationForm />
      <QuestionForm />
      <FakeUserForm />
      <ContextCreationForm />
      <PlatformCreationForm />
      <AppCreationForm />
      <TestCreationForm />
      
    </div>
  );
}
