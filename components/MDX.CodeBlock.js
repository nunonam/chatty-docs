import React, { useState, useEffect } from 'react'

import Highlight, { defaultProps } from 'prism-react-renderer'
import Prism from 'prism-react-renderer/prism'
import vsLight from 'prism-react-renderer/themes/vsLight'
import dracula from 'prism-react-renderer/themes/dracula'
import github from 'prism-react-renderer/themes/github'

import CopyButton from './CopyButton'
import { Box, Flex, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'

export default function CodeBlock({ className, children }) {
  const [codeLanguage, setCodeLanguage] = useState(className?.split('-')[1] || '')
  const { colorMode } = useColorMode();
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box px={4} >
      <Box mt={2} mb={4} borderWidth={1} borderColor={borderColor} borderRadius={'lg'} >
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
            {...defaultProps}
            theme={colorMode === 'light' ? vsLight : dracula}
            code={children.trim()}
            // language={codeLanguage}
            language={'typescript'}
          >
            {({ tokens, getLineProps, getTokenProps }) => (
              <pre>
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
              </pre>
            )}
          </Highlight>
        </Box>
      </Box>
    </Box>
  )
}
