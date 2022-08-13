import { Button, Divider, Flex, HStack, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export default function NeedHelpBlock() {


  return (
    <Stack my={10} spacing={2}>
      <Text fontWeight={700}>Need Help?</Text>
      <Divider />
      <Text fontSize={'sm'}>Get help from ChattyCloud's support team, or join our GitHub Discussion board to see how others are using ChattyCloud.</Text>
    </Stack>
  )
}
