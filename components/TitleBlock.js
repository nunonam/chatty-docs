import { Box, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export default function TitleBlock(props) {
  const { title, subtitle, banner } = props
  const subTitleColor = useColorModeValue('gray.600', 'gray.400');
  return (
    <Stack mb={4}>
      <Heading size={'lg'}>{title}</Heading>
      {subtitle && <Text fontWeight={600} color={subTitleColor}>{subtitle}</Text>}
      {banner && <img src={banner} alt={title} />}
    </Stack>
  )
}
