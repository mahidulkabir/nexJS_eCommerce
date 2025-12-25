import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { showToast } from '@/lib/showToast';
import { WEBSITE_HOME } from '@/routes/WebsiteRoute';
import { logout } from '@/store/reducer/authReducer';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { MdLogout } from "react-icons/md";
import { useDispatch } from 'react-redux';

const LogoutButton = () => {

    const dispatch = useDispatch()
    const router = useRouter()
    const handleLogout = async()=>{
        try {
            const {data: logoutResponse} = await axios.post('/api/auth/logout')
            if(!logoutResponse.success){
                throw new Error(logoutResponse.message)
            }
            dispatch(logout())
            showToast('success', logoutResponse.message)
            router.push(WEBSITE_HOME)
        } catch (error) {
           showToast('error', error.message)
        }
    }

  return (
    <div>
       <DropdownMenuItem onClick={handleLogout}>
          <Link  href="" className="cursor-pointer flex gap-1 items-center  justify-center">
           <MdLogout color='red' />

           Logout
          </Link>
        </DropdownMenuItem>
    </div>
  )
}

export default LogoutButton
