import { Box, Flex, Spacer } from '@chakra-ui/react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

export default function Layout({ children }) {
  return (
    <Box h={'full'}>
      <Flex mx={'auto'} flexDirection={'column'}>
        <Header />
        <Flex
          flex={1}
          flexDirection={'column'}
          w={'full'}
          mx={'auto'}
          maxW={'7xl'}
          px={{ base: 4, md: 8 }}
          py={4}
        >
          <Flex flexDirection={{ base: 'column', md: 'row' }} h={'full'}>
            <Box
              // flexShrink={0}
              display={{ base: 'none', md: 'block' }}
              px={{ base: 0, md: 2 }}
              mr={{ base: 0, md: 12 }}
            >
              <Navigation />
            </Box>
            <Box flex={1} minW={0}>{children}</Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
