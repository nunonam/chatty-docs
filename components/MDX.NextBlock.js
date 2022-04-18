import React from 'react'

import Link from 'next/link'
import { Box, Heading, ListItem, UnorderedList, useColorModeValue } from '@chakra-ui/react'

export default function NextBlock(props) {
  const { steps } = props
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const itemColor = useColorModeValue('gray.700', 'gray.300');

  return (
    <Box borderRadius={'lg'} p={3} bgColor={bgColor} my={2} fontSize={'sm'}>
      <Heading size='sm'>Next steps</Heading>
      <UnorderedList p={2}>
        {steps.map((step) => {
          return (
            <ListItem color={itemColor} fontWeight={500} lineHeight={1.6} fontSize={'sm'} key={step.link}>
              <Link href={step.link}>
                <a>{step.text}</a>
              </Link>
            </ListItem>
          )
        })}
      </UnorderedList>
    </Box>
  )
}
