import { Input, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import lunr from 'lunr';
import { readFileSync, sync, marked } from 'next/config';


export default function SearchBar({ index }) {
  // const searchInput = React.createRef();
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const [searchKeyword, setSearchKeyword] = React.useState('');

  // useEffect(() => {
  //   document.addEventListener('keydown', handleKeyDownEvent)
  // });

  // function handleKeyDownEvent(e) {
  //   if (e.code === 'Escape' && searchInput.current) {
  //     searchInput.current.blur()
  //   }
  // }


  // interface SearchDocument {
  //   id: string;
  //   title: string;
  //   body: string;
  // }



  // const search = (query: string) => {
  //   return index.search(query).map(({ ref }) => documents.find(({ id }) => id === ref));
  // }

  // console.log(search('example'));

  const search = (query) => {
    const result = index.search(query).map(({ ref }) => documents.find(({ id }) => id === ref));
    console.debug('search result', result);
    return result;
  }



  return (
    <Input
      placeholder="Search documentation"
      minW={'xs'}
      size={'sm'}
      borderRadius={'md'}
      bgColor={bgColor}
      // ref={searchInput}
      type={"search"}
      value={searchKeyword}
      onChange={(e) => setSearchKeyword(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          e.stopPropagation();
          search(searchKeyword);
          // getMembers();
        }
      }}
    />
  )
}

export async function getStaticProps() {
  const documents = [];
  const index = lunr(function () {
    this.ref('id');
    this.field('title');
    this.field('body');
  });

  const files = sync('../content/docs/**/*.md');
  await Promise.all(files.map((file) => {
    const markdown = readFileSync(file, 'utf-8');
    const html = marked(markdown);
    const title = markdown.match(/# (.*)/)[1];
    const id = file;
    const doc = { id, title, body: html };
    documents.push(doc);
    index.add(doc);
  }));

  console.debug('document search indexing completed', index);

  return { props: { index } };
}