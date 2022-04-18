import { theme, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

export default function InlineCodeBlock({ children }) {
  const pColor = useColorModeValue(theme.colors.blue[600], theme.colors.blue[400]);

  return <code style={{ color: pColor }}>{children}</code>
}
