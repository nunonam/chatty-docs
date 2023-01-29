import React, { useEffect, useState } from 'react'

import Cookies from 'js-cookie'
import Link from 'next/link'

import Logo from './Logo'
import Navigation from './Navigation'
import SearchBar from './Searchbar'
import { Box, Button, Flex, HStack, IconButton, LinkBox, LinkOverlay, Text, useColorModeValue } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import Pricing from './Pricing'
import ThemeToggler from './ThemeToggler'

export default function Header() {
  const [isSignedIn, setSignedInState] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false)

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.800');
  // const buttonBgColor = useColorModeValue('gray.80', 'gray.50');

  function toggleMobileNav() {
    setShowMobileNav((s) => !s)
  }

  useEffect(() => {
    if (typeof Cookies.get('signed_in') !== 'undefined') {
      setSignedInState(true)
    }
  }, [])

  return (
    <Box
      // sx={{ position: 'sticky', top: '0' }}
      zIndex={40}
      w={'full'}
      py={3}
      mx={'auto'}
      borderBottomWidth={1}
      borderBottomColor={borderColor}
      bg={bgColor}
    >

      <Flex flex={1} maxW={'7xl'} mx={'auto'} alignItems={'center'} justifyContent={'space-between'} px={{ base: 2, md: 6 }}>
        <Link href='/'>
          <a>
            <Logo size={'xs'} color={useColorModeValue('#111111', '#EFEFEF')} />
          </a>
        </Link>

        {/* <Box display={{ base: 'none', md: 'block' }}>
          <SearchBar />
        </Box> */}


        <Box display={{ base: 'none', md: 'block' }}>
          <HStack spacing={2} alignItems={'center'}>
            <ThemeToggler />
            <Button
              colorScheme="gray"
              size='sm'
              onClick={() => window.open('https://dashboard.chatty-cloud.com')}
            >
              dashboard
            </Button>
            <Pricing />
          </HStack>
        </Box>

        <Box display={{ base: 'block', md: 'none' }} px={{ base: 2, md: 0 }}>
          <HStack spacing={2} alignItems={'center'}>
            <ThemeToggler />
            <IconButton
              icon={!showMobileNav ? <HamburgerIcon w={6} h={6} /> : <CloseIcon w={5} h={5} />}
              aria-label={""}
              onClick={toggleMobileNav}
              variant="ghost"
            />
          </HStack>
        </Box>
      </Flex>
      <Box zIndex={40} w={'full'} px={4} pt={3} display={{ base: showMobileNav ? 'block' : 'none', md: 'none' }}>
        <Navigation />
      </Box>
    </Box >
  )
}
