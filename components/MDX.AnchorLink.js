import * as React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import theme from './Theme';


function AnchorLink({ children }) {
  const color = useColorModeValue(theme.colors.blue[600], theme.colors.blue[500]);
  return (
    <Box as={'span'} fontSize={'sm'} color={color}>
      <a href={children} target='_blank'><b>{children}</b></a>
    </Box>
  );
}

export default AnchorLink
