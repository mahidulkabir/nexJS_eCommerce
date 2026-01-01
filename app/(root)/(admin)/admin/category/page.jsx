import BreadCrumb from '@/components/Application/Admin/BreadCrumb'
import { ADMIN_CATEGORY_ADD, ADMIN_CATEGORY_SHOW, ADMIN_DASHBOARD, ADMIN_TRASH } from '@/routes/AdminPanelRoute'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FiPlus } from 'react-icons/fi'
import DatatableWrapper from '@/components/Application/Admin/DatatableWrapper'
const breadCrumbData = [
  { href: ADMIN_DASHBOARD, label: "Home" },
  { href: ADMIN_CATEGORY_SHOW, label: "Category" },
  
]
const ShowCategory = () => {
  return (
    <div>
        <BreadCrumb breadCrumbData={breadCrumbData} />
      <Card className="py-0 rounded shadow-sm">
        <CardHeader className="pt-3 px-3 border-b [.border-b:pb-2] ">
        
          <div className='flex justify-between items-center'>

          <h4 className="font-semibold text-xl">Show Category</h4>
              <Link href={ADMIN_CATEGORY_ADD} >
          <Button className='cursor-pointer' >
              <FiPlus/>
                New Category
             </Button>
              </Link>
          </div>
        </CardHeader>
        <CardContent className="pb-5">
          <DatatableWrapper
            queryKey="category-data"
            fetchUrl="/api/category"
            initialPageSize={10}
            columnsConfig={}
            exportEndpoint="/api/category/export"
            deleteEndpoint="/api/category/delete"
            deleteType="SD"
            trashView={`${ADMIN_TRASH}?trashof=category`}
            createAction={action}
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default ShowCategory
