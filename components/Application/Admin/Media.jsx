import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ADMIN_MEDIA_EDIT } from "@/routes/AdminPanelRoute";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { IoLinkOutline } from "react-icons/io5";
import { showToast } from "@/lib/showToast";

const Media = ({
  media,
  handleDelete,
  deleteType,
  selectedMedia,
  setSelectedMedia,
}) => {
  const handleCheck = () => {
    let newSelectedMedia = []
    if (selectedMedia.includes(media._id)){
        newSelectedMedia = selectedMedia.filter(m=>m!== media._id)
    } else{
        newSelectedMedia = [... selectedMedia, media._id]
    }

    setSelectedMedia(newSelectedMedia)
  }

  const handleCopyLink = async(url)=>{
    await navigator.clipboard.writeText(url)
    showToast('success', 'Link Copied.')
  }
  return (
    <div className="border border-gray-200 dark:border-gray-800 relative group rounded overflow-hidden">
      <div className="absolute top-2 left-2 z-20">
        <Checkbox
          checked={selectedMedia.includes(media._id)}
          onCheckedChange={handleCheck}
          className={"border-primary cursor-pointer"}
        />
      </div>
      <div className="absolute top-2 right-2 z-20">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black/20 cursor-pointer">
              <BsThreeDotsVertical color="#fff" />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {deleteType === "SD" && (
              <>
              {/* menu item 1 */}
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link
                    href={ADMIN_MEDIA_EDIT(media._id)}
                    className="flex gap-1 justify-center items-center "
                  >
                    <MdOutlineModeEdit />
                    Edit
                  </Link>
                </DropdownMenuItem>
                {/* menu item 2 */}
                <DropdownMenuItem className="cursor-pointer" onClick={()=> handleCopyLink(media.secure_url)}>
                  <IoLinkOutline />
                  Copy Link
                </DropdownMenuItem>
              </>
            )}
            {/* menu item 3 */}
            <DropdownMenuItem className="cursor-pointer"onClick={()=> handleDelete([media._id], deleteType)} >
                  <MdDeleteOutline color="red" />
                    
                    {deleteType === 'SD' ? 'Move Into Trash' : 'Delete Permanently'}
                  
                </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full h-full absolute z-10 transition-all duration-150 ease-in group-hover:bg-black/20"></div>
      <div>
        <Image
          src={media?.secure_url} 
          alt={media?.alt || "Image"}
          height={300}
          width={300}
          className="object-cover w-full sm:h-[200px] h-[150px]"
        />
      </div>
    </div>
  );
};

export default Media;
