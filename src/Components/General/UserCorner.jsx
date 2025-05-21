"use client";
import {
  useDisclosure,
  Button,
  Avatar,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
  Badge,
  Box
} from "@chakra-ui/react";
import { useRef } from "react";

export default function UserCorner() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Avatar as={Button} ref={btnRef} onClick={onOpen} size={'md'}/>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text>
            UserName UserLast
            </Text>
            <Badge>
              UserRol
            </Badge>
          </DrawerHeader>
          <DrawerBody>
         <Box display={'flex'} justifyContent={'space-around'}>
           <Button>UserInfo</Button>
             <Button>logOut</Button>
         </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
