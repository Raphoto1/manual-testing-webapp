//app
import React from "react";
//own
import BtnCustom from "../General/BtnCustom";
import { useDisclosure, Modal } from "@chakra-ui/react";

export default function UserCreationForm() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
          <BtnCustom onClick={onOpen} text={"AdminUser"} />
          <Modal>
              
          </Modal>
    </>
  );
}
