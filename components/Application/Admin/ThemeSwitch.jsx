'use client'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const ThemeSwitch = () => {
  const {setTheme} = useTheme()
  return (
    <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button type="button" variant="ghost" >
      <IoSunnyOutline className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <IoMoonOutline className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />  
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
   
    <DropdownMenuItem onClick={()=>setTheme('light')}>Light</DropdownMenuItem>
    <DropdownMenuItem onClick={()=>setTheme('dark')}>Dark</DropdownMenuItem>
    <DropdownMenuItem onClick={()=>setTheme('system')}>System</DropdownMenuItem>

  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default ThemeSwitch  