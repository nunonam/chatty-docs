import * as React from 'react'
import { Box, Heading, useColorModeValue } from '@chakra-ui/react'


function HeadingBlock(props) {
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const { children, heading, category } = props

  let mtSize = 0
  let mbSize = 0
  let headingSize = 'lg';
  let bbWidth = 1;

  switch (heading) {
    case 'h1':
      mtSize = 0
      mbSize = 10
      headingSize = 'lg'
      bbWidth = 0
      break
    case 'h2':
      mtSize = 14
      mbSize = 7
      headingSize = 'md'
      bbWidth = 1
      break
    case 'h3':
      mtSize = 9
      mbSize = 5
      headingSize = 'sm'
      break
    default:
      mtSize = 0
      mtSize = 0
      headingSize = 'sm'
      break
  }


  return (
    <Box mt={mtSize} mb={mbSize} py={2} borderBottomWidth={bbWidth} borderBottomColor={borderColor}>
      <Heading size={headingSize}>{children}</Heading>
    </Box>
  );
}

export default HeadingBlock
