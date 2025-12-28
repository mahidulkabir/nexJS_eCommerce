'use client'
import BreadCrumb from '@/components/Application/Admin/BreadCrumb'
import useFetch from '@/hooks/useFetch'
import { ADMIN_DASHBOARD, ADMIN_MEDIA_SHOW } from '@/routes/AdminPanelRoute'
import React, { use } from 'react'
const breadCrumbData = [
  {
    href:ADMIN_DASHBOARD,
    label: 'Home'
  },
  {
    href: ADMIN_MEDIA_SHOW,
    label: 'Media'
  },
  {
    href: "#",
    label:'Edit Media'
  }
]
const EditMedia = ({params}) => {
  const {id} = use(params)
  const {data:mediaData} = useFetch(`/api/media/get/${id}`)
  return (
    <div>
      <BreadCrumb breadCrumbData={breadCrumbData}/>
      Edit Media
    </div>
  )
}

export default EditMedia
