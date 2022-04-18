import React from 'react'

import { Box, HStack, Link, LinkOverlay, Text, useColorModeValue } from '@chakra-ui/react'

export default function Footer() {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  return (
    <HStack justifyContent={'space-between'} borderTopWidth={1} borderTopColor={borderColor} mt={6} pt={6}>

      <HStack>
        <Link href='https://www.chatty-cloud.com/legal/privacy'>
          <Text fontSize={'sm'}>Privacy</Text>
        </Link>
        <Link href='https://www.chatty-cloud.com/legal/siteterms'>
          <Text fontSize={'sm'}>Terms</Text>
        </Link>
      </HStack>
      <Text fontSize={'sm'} fontWeight={'extrabold'}>&copy; 2021 ChattyCloud Inc.</Text>
    </HStack>

  )
}
