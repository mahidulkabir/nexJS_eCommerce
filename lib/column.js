import { Chip } from "@mui/material"
import dayjs from "dayjs"

export const DT_CATEGORY_COLUMN = [
    {
        header:'Category Name',
        accessorKey : 'name',
       
    },
    {
        header:'Slug',
        accessorKey : 'slug',
       
    },
]
export const DT_PRODUCT_COLUMN = [
    {
        header:'Product Name',
        accessorKey : 'name',
       
    },
    {
        header:'Slug',
        accessorKey : 'slug',
       
    },
    {
        header:'Category',
        accessorKey : 'category',
       
    },
    {
        header:'MRP',
        accessorKey : 'mrp',
       
    },
    {
        header:'Selling Price',
        accessorKey : 'sellingPrice',
       
    },
    {
        header:'Discount Percentage',
        accessorKey : 'discountPercentage',
       
    },
]
export const DT_PRODUCT_VARIANT_COLUMN = [
    {
        header:'Product Name',
        accessorKey : 'product',
       
    },
    {
        header:'Color',
        accessorKey : 'color',
       
    },
    {
        header:'Size',
        accessorKey : 'size',
       
    },
    {
        header:'SKU',
        accessorKey : 'sku',
       
    },
    {
        header:'MRP',
        accessorKey : 'mrp',
       
    },
    {
        header:'Selling Price',
        accessorKey : 'sellingPrice',
       
    },
    {
        header:'Discount Percentage',
        accessorKey : 'discountPercentage',
       
    },
]
export const DT_COUPON_COLUMN = [
    {
        header:'Code',
        accessorKey : 'code',
       
    },
    
    {
        header:'Discount Percentage',
        accessorKey : 'discountPercentage',
        
    },
    {
        header:'Min. Shopping Amount',
        accessorKey : 'minShoppingAmount',
       
    },
    {
        header:'Validity',
        accessorKey : 'validity',
       Cell:({renderedCellValue}) =>(
        new Date() > new Date(renderedCellValue) ? <Chip color="error" label={dayjs(renderedCellValue).format('DD/MM/YYYY')} /> : <Chip color="success" label={dayjs(renderedCellValue).format('DD/MM/YYYY')}/>
       )
    },
]