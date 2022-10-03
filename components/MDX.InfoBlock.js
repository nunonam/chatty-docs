import React from 'react'

import classNames from 'classnames'
import { Box, useColorModeValue } from '@chakra-ui/react'

export default function InfoBlock(props) {
  const { type, children } = props
  const bgWarningColor = useColorModeValue('red.300', 'red.600');
  const bgColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box px={4}>
      <Box borderRadius={'lg'} p={3} bgColor={type === 'warning' ? bgWarningColor : bgColor} my={8} fontSize={'sm'}>
        {type === 'note' && <strong>Note</strong>} {type === 'warning' && <strong>Warning</strong>}{' '}
        {type === 'tip' && <strong>Tip</strong>}
        <Box>{children}</Box>
      </Box>
    </Box>
  )
}
