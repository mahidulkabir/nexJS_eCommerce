import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import imgPlaceHolder  from '@/public/assets/images/img-placeholder.webp';
import { IoStar } from "react-icons/io5";
const LatestReview
 = () => {
  return (
    <Table>
  <TableHeader>
    <TableRow>
      <TableHead >Product</TableHead>
      <TableHead>Rating</TableHead>
    
    </TableRow>
  </TableHeader>
  <TableBody>
    {Array.from({length:10}).map((_,i)=>(

    <TableRow key={i}>
      <TableCell >
        <div className='flex items-center gap-2' >
             <Avatar>
            <AvatarImage src={imgPlaceHolder.src}/>
        </Avatar>
        <span className="line-clamp-1">Lorem, ipsum dolor.</span>
        </div>
       
      </TableCell>
      
        <TableCell >
            <div className='flex items-center ' >
                {Array.from({length:5}).map((_,i)=>(
                    <span key={i} >
                        <IoStar className="text-yellow-400"/>
                    </span>
                ))}
            </div>
                
        </TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>
  )
}

export default LatestReview

