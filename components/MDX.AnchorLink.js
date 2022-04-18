import * as React from 'react'
import { Box, Heading, LinkBox, LinkOverlay, Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'


function AnchorLink(props) {
  const textColor = useColorModeValue('blue.600', 'blue.400');

  const { children, heading, category } = props

  console.log('link nuno', children)
  return (
    <Box as={'span'} fontSize={'sm'} color={'blue.300'}>
      <a>{props.children}</a>
      {/* <Link href={'/'}>{props.children}</Link> */}
    </Box>
    // <LinkBox
    //   // as={'span'}
    //   fontSize='sm'
    //   fontWeight={'bold'}
    //   bgColor={'blue.100'}
    // >
    //   {Object.prototype.toString.call(children) === '[object Array]' && children.map((item, index) => {
    //     console.log('nuno', item);
    //     return (
    //       <Link href={'/'} passHref key={index}>
    //         <LinkOverlay>
    //           <Box borderRadius={'md'} p={2} bgColor={'blue.100'}>
    //             <a>dfsdf</a>
    //             <Text
    //               fontSize={'sm'}
    //               color={textColor}
    //             >
    //               {item}
    //             </Text>
    //           </Box>
    //         </LinkOverlay>
    //       </Link>
    //     )
    //   })}


    //   {Object.prototype.toString.call(children) === 'object' && (
    //     <Link href={'/'} passHref>
    //       <LinkOverlay>
    //         <Box borderRadius={'md'} p={2} bgColor={'blue.100'}>
    //           <Text
    //             fontSize={'sm'}
    //             color={textColor}
    //           >
    //             {children.props.children}
    //           </Text>
    //         </Box>
    //       </LinkOverlay>
    //     </Link>
    //   )}
    //   {children === 'string' && (
    //     <Link href={'/'} passHref>
    //       <LinkOverlay>
    //         <Box borderRadius={'md'} p={2} bgColor={'blue.100'}>
    //           <Text
    //             fontSize={'sm'}
    //             color={textColor}
    //           >
    //             {children}
    //           </Text>
    //         </Box>
    //       </LinkOverlay>
    //     </Link>
    //   )}
    // </LinkBox >
  );
}

export default AnchorLink
