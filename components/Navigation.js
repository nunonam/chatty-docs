import React from 'react'


import meta from '../content/docs/meta.json'
import LabelSelect from './LabelSelect'
import { Box, Button, Heading, HStack, LinkBox, LinkOverlay, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useColorMode, useColorModeValue, useToast } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SearchBar from './Searchbar'
import Pricing from './Pricing'

export default function Navigation() {
  // const { theme, setTheme } = useTheme()
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonBgColor = useColorModeValue('gray.80', 'gray.50');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const selectedTextColor = useColorModeValue('gray.700', 'gray.300');
  const [library, setLibrary] = React.useState('react-native');
  const toast = useToast();
  const switchMode = (event) => {
    setTheme(event.target.value);
    console.log('colormode ', event.target.value);
  }

  const changeLibrary = (e) => {
    console.log('language ', e.target.value);
    if (e.target.value === 'flutter') {
      toast({
        title: 'Flutter is not supported yet',
        position: 'top',
        variant: 'solid',
        duration: 4000,
        status: 'error'
      });
      return;
    }
    setLibrary(e.target.value);
  }

  const toc = meta

  function SidenavGroup({ categoryID, category, pages }) {
    const router = useRouter();
    const bgColor = useColorModeValue('gray.100', 'gray.800');
    return (
      <Box my={3}>
        <Heading mb={1} size={'sm'}>{category}</Heading>
        {pages.map((page, index) => {
          const href = `/${categoryID}/${page['route']}`

          return (
            <LinkBox
              key={index}
              fontSize='sm'
              fontWeight={router.query.post === page['route'] ? 'bold' : undefined}
            >
              <Link href={href} passHref>
                <LinkOverlay>
                  <Box bgColor={router.query.post === page['route'] ? bgColor : undefined} borderRadius={'md'} p={2}>
                    <Text
                      fontSize={'sm'}
                      color={router.query.post === page['route'] ? selectedTextColor : textColor}
                      fontWeight={router.query.post === page['route'] ? 700 : 500}
                    >
                      {page['display']}
                    </Text>
                  </Box>
                </LinkOverlay>
              </Link>
            </LinkBox>
          )
        })}
      </Box>
    )
  }


  return (
    <Stack>
      <Stack display={{ base: 'flex', md: 'none' }} py={2}>
        <Button
          colorScheme="blue"
          bgColor={buttonBgColor}
          // variant="outline"
          size='sm'
          onClick={() => window.open('https://devdashboard.chatty-cloud.com')}
        >
          dashboard
        </Button>
        <Pricing />
        <SearchBar />
      </Stack>

      <Stack>
        <LabelSelect label='SDK' value={library} size='xs' onChange={changeLibrary}>
          <option value='react-native'>React Native</option>
          <option value='flutter'>Flutter</option>
        </LabelSelect>
        {/* <LabelSelect label='Version' value={'1.1'} size='xs' onChange={(e) => null}>
          <option value='1.1'>1.1</option>
          <option value='1.0'>1.0</option>
        </LabelSelect> */}
        {/* <LabelSelect label='Theme' value={theme} size='xs' onChange={(e) => setTheme(e.target.value)}> */}
        <LabelSelect label='Theme' value={colorMode} size='xs' onChange={toggleColorMode}>
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
          {/* <option value='system'>System</option> */}
        </LabelSelect>
      </Stack>

      <Box>
        <HStack spacing={2}>
          <Text fontSize={'xs'}>SDK Version</Text>
          <Text fontSize={'xs'} fontWeight={700}>1.0.1</Text>
        </HStack>
      </Box>

      <Box>
        {toc.order.map((category, index) => {
          return (
            <SidenavGroup
              key={index}
              categoryID={category.id}
              category={category.name}
              pages={category.pages}
            ></SidenavGroup>
          )
        })}
      </Box>


    </Stack>
  )
}
