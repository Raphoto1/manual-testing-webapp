import React from 'react'
import { Button } from '@chakra-ui/react'
export default function BtnCustom({text, onClick}) {
  return (
    <Button onClick={onClick} bgGradient={"linear(to-r, purple.500, pink.500)"} className='w-1/6' size={'xs'} rounded={'full'} w={'fit-content'}>
      {text}
    </Button>
  )
}
