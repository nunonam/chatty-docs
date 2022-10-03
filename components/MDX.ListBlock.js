import { Box, ListItem, UnorderedList, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

export default function ListBlock(props) {
  const { children } = props
  const pColor = useColorModeValue('gray.700', 'gray.300');

  return (
    <UnorderedList px={6} mb={10}>
      {Object.prototype.toString.call(children) === '[object Array]' ? children.map((item, index) => {
        return (

          <ListItem key={index} color={pColor} fontWeight={500} lineHeight={1.6} fontSize={'sm'}>{item.props.children}</ListItem>
        )
      }) : (
        <ListItem color={pColor} fontWeight={500} lineHeight={1.6} fontSize={'sm'}>{children.props.children}</ListItem>
      )}
    </UnorderedList>
  )
}
