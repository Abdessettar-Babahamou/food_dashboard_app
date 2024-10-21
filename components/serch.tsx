import { SearchIcon } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'

function Search() {
  return (
    <div className='flex items-center justify-center gap-2 max-h-[80px] bg-white dark:bg-darkInput px-4 py-1 rounded-md'>
      <SearchIcon/>
      <Input type='text' placeholder='Search for food,coofe,etc...' 
      className='bg-transparent border-none shadow-none '/>
    </div>
  )
}

export default Search
