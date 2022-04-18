import React from 'react'

import classnames from 'classnames'

import { Box, Divider, Flex, Text, Select, useColorModeValue } from '@chakra-ui/react'

const LabelSelect = ({
  ariaLabel,
  children,
  onBlur,
  onChange,
  value,
  name,
  size,
  label,
  defaultValue,
  disabled,
  required
}) => {
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const borderColor = useColorModeValue('gray.50', 'gray.700');
  return (
    <Flex bgColor={bgColor} borderWidth={1} borderColor={borderColor} borderRadius={'lg'} px={2}>
      <Box py={1}>
        <Text fontSize={'xs'}>{label}</Text>
      </Box>
      <Divider orientation='vertical' color={borderColor} height={'auto'} mx={2} />
      <Select value={value} defaultValue={defaultValue} size={size} variant={'unstyled'} onChange={onChange}>
        {children}
      </Select>
    </Flex>
  )
}

export default LabelSelect
