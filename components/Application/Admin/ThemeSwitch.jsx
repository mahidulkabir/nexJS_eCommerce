import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { Button } from '@/components/ui/button';

const ThemeSwitch = () => {
  return (
    <DropdownMenu>
  <DropdownMenuTrigger>
    <Button type="button" variant="ghost" >
      <IoSunnyOutline className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <IoMoonOutline className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />  
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default ThemeSwitch  