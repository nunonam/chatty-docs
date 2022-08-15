// import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function ImageBlock(props) {
  const { alt, src } = props
  const [imageURL] = useState(src)

  return (
    <img src={imageURL} alt={alt} style={{ borderRadius: 10 }}></img>
    // <Box>
    //   {alt && <Box>{alt}</Box>}
    // </Box>
  )
}
