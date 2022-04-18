import { Box, Button, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'

import CopyToClipboard from 'react-copy-to-clipboard'

import Icon from './Icon'

const CopyButton = ({ value, ariaLabel, text, variant, title, className, onCopied }) => {
  const buttonBgColor = useColorModeValue('gray.200', 'gray.700')

  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    setCopied(true)
    if (onCopied != null) {
      onCopied(true)
    }
    setTimeout(() => setCopied(false), 1500)
  }

  const buttonVariant = variant || (text ? 'primary' : 'text')

  return (
    <HStack justifyContent={'space-between'}>
      <Box display={copied ? 'block' : 'none'}>
        <Text fontSize={'xs'} fontWeight={'bold'}>Copied</Text>
      </Box>

      <CopyToClipboard text={value} onCopy={handleCopy}>
        <Button
          colorScheme="blue"
          bgColor={buttonBgColor}
          variant="ghost"
          size='sm'
          onClick={() => null}
        >
          {!text && <Icon name={copied ? 'clipboard-check' : 'clipboard'} />}
          {text}
        </Button>
      </CopyToClipboard>

    </HStack>
  )
}

export default CopyButton
