import React, { useState, useEffect } from 'react'

import Highlight, { defaultProps } from 'prism-react-renderer'
import Prism from 'prism-react-renderer/prism'
import vsDark from 'prism-react-renderer/themes/vsDark'
import theme from 'prism-react-renderer/themes/vsLight'
// import theme from 'prism-react-renderer/themes/github'

import CopyButton from './CopyButton'
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'

export default function CodeBlock({ className, children }) {
  const [codeLanguage, setCodeLanguage] = useState(className?.split('-')[1] || '')

  const borderColor = useColorModeValue('gray.200', 'gray.700')

  // console.log(className)
  return (
    <Box mt={2} mb={4} borderWidth={1} borderColor={borderColor} borderRadius={'lg'}>
      <Flex bgColor={borderColor} justifyContent={'space-between'} alignItems={'center'} borderTopRadius={'lg'}>
        <Box px={2}>
          <Text fontSize={'sm'}>{codeLanguage}</Text>
        </Box>
        <CopyButton
          value={children.trim()}
          ariaLabel={'Copy snippet'}
          title={'Copy snippet'}
        />
      </Flex>
      <Box
        p={4}
        overflow={'auto'}
      >
        <Highlight
          theme={vsDark}
          {...defaultProps}
          code={children.trim()}
          language={codeLanguage}
        >
          {({ tokens, getLineProps, getTokenProps }) => (
            <Box>
              {tokens.map((line, i) => (
                <Box key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <Box as={'span'} fontSize={'sm'}
                      key={key}
                      {...getTokenProps({ token, key })}
                    />
                  ))}
                </Box>
              ))}
            </Box>
          )}
        </Highlight>
      </Box>
    </Box>
  )
}
