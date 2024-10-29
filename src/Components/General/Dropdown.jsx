"use client";
import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, Button, Portal } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
export default function Dropdown({ title, options }) {
  return (

      <Menu>
        <MenuButton
          as={Button}
          bgGradient={"linear(to-r, purple.500, pink.500)"}
          rightIcon={<ChevronDownIcon />}
          transition='all 0.2s'
          borderRadius='xl'
          _hover={{ bg: "pink.500" }}
          _expanded={{ bg: "purple.500" }}
          _focus={{ boxShadow: "outline" }}
          size={"xs"}
          alignContent={'center'}
          alignItems={'center'}
        alignSelf={'center'}>
          {title}
        </MenuButton>
        <Portal>
          <MenuList size={'xs'}>
            {options?.map((e,index) => 
              <MenuItem key={index} size={'xs'}>{e.title}</MenuItem>
            )}
          </MenuList>
        </Portal>
      </Menu>

  );
}
