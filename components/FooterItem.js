import { useScrollTrigger } from "@material-ui/core";
import Image from "next/image";
function FooterItem({title, url}) {
    return (
       
            <div onClick={null} className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white ">
          
           
            <div className="h-8 mb-1 group-hover:animate-bounce">{url}</div>
            
            <p className="opacity-0 group-hover:opacity-100 tracking-wide  ">{title}</p>
           </div>
            
       
    )
}

export default FooterItem
