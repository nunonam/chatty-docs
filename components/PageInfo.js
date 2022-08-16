import React from 'react'

import { Link, HStack, Text } from '@chakra-ui/react'

export default function PageInfo({ lastUpdatedOn, slug }) {
  var lastUpdatedOnDate = new Date()
  if (lastUpdatedOn) {
    lastUpdatedOnDate = new Date(Date.parse(lastUpdatedOn))
  }

  const options = { month: 'long' }

  return (
    <HStack justifyContent={'space-between'}>
      <Text fontSize={'sm'} fontWeight={'bold'} color={'gray.500'}>
        Last updated on {new Intl.DateTimeFormat('en-US', options).format(lastUpdatedOnDate)}{' '}
        {lastUpdatedOnDate.getDate()}, {lastUpdatedOnDate.getFullYear()}
      </Text>
      <Link href={slug === 'README' ? `https://github.com/chattycloud/docs/blob/main/${slug}.mdx` : `https://github.com/chattycloud/docs/blob/main/content/docs/${slug}.mdx`}>
        <Text fontSize={'sm'} fontWeight={'bold'} color={'gray.500'}>
          Help us improve this page
        </Text>
      </Link>
    </HStack>
  )
}
