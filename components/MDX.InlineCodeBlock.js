import { theme, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

export default function InlineCodeBlock({ children }) {
  const pColor = useColorModeValue(theme.colors.blue[600], theme.colors.blue[500]);

  return <code style={{ color: pColor, fontFamily: 'Google Sans', fontWeight: 700 }}>{children}</code>
}
