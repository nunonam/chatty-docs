import React from 'react'

import { Box, Button, Center, HStack, Link, LinkOverlay, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import Logo from './Logo'

export default function Footer() {
  const router = useRouter();
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  return (
    <Stack>

      <HStack justifyContent={'space-between'} alignItems={'flex-start'} borderTopWidth={1} borderTopColor={borderColor} mt={6} pt={6}>
        <Stack alignItems={'flex-start'} spacing={5}>
          <Logo size={'xs'} color={useColorModeValue('#111111', '#EFEFEF')} />
          <Stack alignItems={'flex-start'} px={2}>
            <Text fontSize="xs">사업자등록번호 : 526-81-01999</Text>
            <Text fontSize="xs">대표 : 남형철</Text>
            <Text fontSize="xs">통신판매업 신고번호 : 제2020-서울서대문-1548호</Text>
            <Text fontSize="xs">주소 : 서울특별시 서대문구 신촌로 25, 상록빌딩 2층 219호 (02-6010-6016)</Text>
            <Text fontSize={'sm'} fontWeight={'extrabold'}>&copy; 2021 REACTLAB Inc.</Text>
          </Stack>
        </Stack>
        <HStack>
          <Button variant={'link'} size='xs' onClick={() => window.open('https://app.termly.io/document/privacy-policy/d94c196e-2f71-4137-a3ea-e0f458064757', '_ blank')}>Privacy</Button>
          <Button variant={'link'} size='xs' onClick={() => window.open('https://app.termly.io/document/terms-of-use-for-saas/fc9e8007-f21e-4d94-ac2e-01848b5ec7fb#agreement', '_ blank')}>Terms</Button>
          <Button variant={'link'} size='xs' onClick={() => window.open('https://app.termly.io/document/cookie-policy/578b6f0b-18f3-4690-800d-6126e0ff898d', '_ blank')}>Cookie</Button>
        </HStack>
      </HStack>

    </Stack>

  )
}
