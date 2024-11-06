//app
import React from "react";
//own
import BtnCustom from "./General/BtnCustom";
import DevCreationForm from "./Forms/DevCreationForm";
import UserCreationForm from "./Forms/UserCreationForm";
export default function Functions() {
  return (
    <div className='flex justify-between p-2 gap-2'>
      <DevCreationForm />
      <UserCreationForm />
      <BtnCustom text={"new Test"} />
      <BtnCustom text={"new question"} />
      <BtnCustom text={"new app"} />
      <BtnCustom text={"new Context"} />
      <BtnCustom text={"New Fake User"} />
    </div>
  );
}
