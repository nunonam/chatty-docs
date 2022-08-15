// libs
import React from 'react'

import { MDXRemote } from 'next-mdx-remote'

import FeedbackBlock from './FeedbackBlock'
import TitleBlock from './TitleBlock'
import HeadingBlock from './MDX.HeadingBlock'
import CodeBlock from './MDX.CodeBlock'
import ImageBlock from './MDX.ImageBlock'
import InfoBlock from './MDX.InfoBlock'
import InlineCodeBlock from './MDX.InlineCodeBlock'
import NextBlock from './MDX.NextBlock'
import TableBlock from './MDX.TableBlock'
import ListBlock from './MDX.ListBlock'
import PageInfo from './PageInfo'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import NeedHelpBlock from './NeedHelpBlock'


export default function MDXContent({ title, subtitle, banner, body, lastUpdatedOn, slug, category }) {
  const pColor = useColorModeValue('gray.700', 'gray.300');
  const components = {
    table: TableBlock,
    code: CodeBlock,
    inlineCode: InlineCodeBlock,
    img: ImageBlock,
    h1: (props) => <HeadingBlock {...props} heading='h1' category={category} />,
    h2: (props) => <HeadingBlock {...props} heading='h2' category={category} />,
    h3: (props) => <HeadingBlock {...props} heading='h3' category={category} />,
    ul: (props) => <ListBlock {...props} />,
    p: (props) => <Text color={pColor} fontWeight={500} lineHeight={1.6} fontSize={'sm'}>{props.children}</Text>,
    NextBlock,
    InfoBlock
  }

  return (
    <Box>
      <TitleBlock title={title} subtitle={subtitle} banner={banner} />
      <MDXRemote {...body} components={components} lazy />
      <NeedHelpBlock />
      <FeedbackBlock />
      <PageInfo lastUpdatedOn={lastUpdatedOn} slug={slug}></PageInfo>
    </Box>
  )
}
