import { Input, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect } from 'react'

export default function SearchBar() {
  const searchInput = React.createRef();
  const bgColor = useColorModeValue('gray.100', 'gray.800');

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDownEvent)
  })

  function handleKeyDownEvent(e) {
    if (e.code === 'Escape' && searchInput.current) {
      searchInput.current.blur()
    }
  }

  return (
    <Input
      id='searchbox'
      minW={'xs'}
      bgColor={bgColor}
      ref={searchInput}
      type={"search"}
      placeholder="Search documentation"
    // errorBorderColor='red.500'
    // isInvalid={errors.name}
    // {...register("name", { required: { value: true, message: 'name field is mandatory' }, maxLength: 100, pattern: { value: /^[a-zA-Z0-9-]+$/, message: 'Only alphanumeric and dash allowed' } })}
    />
    // <input
    //   type='search'
    //   className='w-full leading-[1.5rem] px-1.5 rounded ring-offset-0 border shadow-sm text-base py-sm focus-ring bg-secondary text-primary border-secondary'
    //   id='searchbox'
    //   ref={searchInput}
    //   placeholder={'Search documentation'}
    // ></input>
  )
}
