'use client'
import BreadCrumb from '@/components/Application/Admin/BreadCrumb'
import { ADMIN_DASHBOARD, ADMIN_TRASH } from '@/routes/AdminPanelRoute'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React, { useCallback, useMemo } from 'react'

import DatatableWrapper from '@/components/Application/Admin/DatatableWrapper'
import { columnConfig } from '@/lib/helperFunction'
import {  DT_CUSTOMERS_COLUMN } from '@/lib/column'

import DeleteAction from '@/components/Application/Admin/DeleteAction'
const breadCrumbData = [
  { href: ADMIN_DASHBOARD, label: "Home" },
  { href: '', label: "Customers" },
  
]
const ShowCustomers = () => {

const columns = useMemo(()=>{
  return columnConfig(DT_CUSTOMERS_COLUMN)
},[])

const action = useCallback((row, deleteType, handleDelete)=>{
let actionMenu = []
actionMenu.push(<DeleteAction key='delete' handleDelete={handleDelete}  row={row} deleteType={deleteType}/>)
return actionMenu
},[])

  return (
    <div>
        <BreadCrumb breadCrumbData={breadCrumbData} />
      <Card className="py-0 rounded shadow-sm gap-0">
        <CardHeader className="pt-3 px-3 border-b [.border-b:pb-2] ">
        
          <div className='flex justify-between items-center'>

          <h4 className="font-semibold text-xl">Customers</h4>
              
          </div>
        </CardHeader>
        <CardContent className="pb-5 px-0">
          <DatatableWrapper
            queryKey="customers-data"
            fetchUrl="/api/customers"
            initialPageSize={10}
            columnsConfig={columns}
            exportEndpoint="/api/customers/export"
            deleteEndpoint="/api/customers/delete"
            deleteType="SD"
            trashView={`${ADMIN_TRASH}?trashof=customers`}
            createAction={action}
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default ShowCustomers
