import { createIcon, Button, Container, Heading, HStack, Stack, Text, Icon, SimpleGrid, VStack, Box, useColorModeValue, theme, Center, Divider } from '@chakra-ui/react'
import Link from 'next/link'
import SVG from 'react-inlinesvg'
import { HiCheckCircle } from 'react-icons/hi';
import { serialize } from 'next-mdx-remote/serialize'
import Footer from '../components/Footer'
// import Icon from '../components/Icon'
import Layout from '../components/layout'
import Logo from '../components/Logo'
import { TitleAndMetaTags } from '../components/TitleAndMetaTags'
import { Router, useRouter } from 'next/router';
import MDXContent from '../components/MDX.Content';
import { getIndex } from '../lib/post';

export default function Overview({ frontmatter, body, fields }) {
  const grayTextColor = useColorModeValue('gray.600', 'gray.400');
  const buttonBgColor = useColorModeValue('gray.800', 'gray.50');
  const router = useRouter();

  return (
    <Layout>
      <TitleAndMetaTags
        title={frontmatter.title}
        description={frontmatter.subtitle ? frontmatter.subtitle : ''}
        banner={'/img/index-outline.svg'}
        pathname={`${fields.slug}`}
      />
      <MDXContent
        title={frontmatter.title}
        subtitle={frontmatter.subtitle ? frontmatter.subtitle : ''}
        banner={frontmatter.banner ? frontmatter.banner : ''}
        body={body}
        lastUpdatedOn={fields.lastUpdatedOn}
        slug={fields.slug}
      ></MDXContent>
      <Footer />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getIndex();
  const mdxSource = await serialize(post.content)

  return {
    props: {
      frontmatter: post.frontmatter,
      headings: post.headings,
      body: mdxSource,
      fields: {
        slug: post.slug,
        lastUpdatedOn: post.lastUpdatedOn
      }
    }
  }
}

