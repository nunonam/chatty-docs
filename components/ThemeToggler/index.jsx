import {
  useColorMode,
  Box,
  IconButton
} from '@chakra-ui/react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box textAlign="right">
      <IconButton
        icon={colorMode === 'light' ? <MdDarkMode size={'16'} /> : <MdLightMode size={'16'} />}
        aria-label={""}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
}