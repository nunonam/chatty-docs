import React from 'react'

import { Box, Button, HStack, Link, LinkOverlay, Text, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  return (
    <HStack justifyContent={'space-between'} borderTopWidth={1} borderTopColor={borderColor} mt={6} pt={6}>

      <HStack>
        <Button variant={'link'} size='xs' onClick={() => window.open('https://app.termly.io/document/privacy-policy/d94c196e-2f71-4137-a3ea-e0f458064757', '_ blank')}>Privacy</Button>
        <Button variant={'link'} size='xs' onClick={() => window.open('https://app.termly.io/document/terms-of-use-for-saas/fc9e8007-f21e-4d94-ac2e-01848b5ec7fb#agreement', '_ blank')}>Terms</Button>
        <Button variant={'link'} size='xs' onClick={() => window.open('https://app.termly.io/document/cookie-policy/578b6f0b-18f3-4690-800d-6126e0ff898d', '_ blank')}>Cookie</Button>
      </HStack>
      <Text fontSize={'sm'} fontWeight={'extrabold'}>&copy; 2021 ChattyCloud Inc.</Text>
    </HStack>

  )
}
