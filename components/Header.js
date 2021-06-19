import  { Avatar } from "@material-ui/core";
// import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
// import { useState } from "react";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebase";

import { 
    BadgeCheckIcon,
    ShoppingBagIcon,
    ShoppingCartIcon,
    } from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
import { PhoneAndroid } from "@material-ui/icons";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems} from "../slices/basketSlice";
import { signIn, signOut, useSession } from 'next-auth/client'



function Header({title}) {
    const [session, loading]=useSession()

    const items = useSelector(selectItems);
   
    const router = useRouter();

    // const GoToProject = (e)=>{
    //     e.preventDefault();
    //     router.push('/project')
    // }
    const GoToProducts =(e)=>{
        e.preventDefault();
        router.push('/Products')
    }
    const GoTOContact =(e)=>{
        e.preventDefault();
        router.push('/contact')
    }

    const GoTOCheckout =(e)=>{
        e.preventDefault();
        router.push('/checkout')
    }
    
    return (
        <nav className="flex flex-col  items-center justify-between p-3 sm:flex-row  h-auto sticky top-0 z-50 bg-blue-900">

        <div onClick={()=>router.push('/')} className=" flex flex-col items-center text-white  h-14 ">
            
            <HeaderItem className=""Icon={ShoppingCartIcon}/> 
            <span onClick={()=>router.push('/')} className="text-xl font-bold cursor-pointer tracking-widest">PAASKTITI {title}</span>
        </div>
        <div className="flex flex-row items-center max-w-2xl"></div>

        <div className="flex flex-grow  pt-6 max-w-2xl sm:justify-end"> 
            {/* <HeaderItem click={GoToProject} className="sm:ml-4" title="PROJECTS"Icon={BadgeCheckIcon}/> */}
            <HeaderItem click={GoToProducts} className="" title="PRODUCTS"Icon={ShoppingBagIcon}/>
            <HeaderItem click={GoTOContact} className="" title="CONTACT"Icon={PhoneAndroid}/>
           
            <div className="relative flex items-center group">
            <span className="absolute top-0 right-0 md:right-4 h-6 w-6 bg-yellow-400 text-center rounded-full group-hover:animate-bounce">
              {items.length}
            </span>
             <HeaderItem click={GoTOCheckout} className="h-10" title="CHECKOUT"Icon={ShoppingBasketIcon}/>
             </div>
        </div>
        {session ? (<div onClick={signOut} className="cursor-pointer">Welcome {session.user.name} </div>):( <div onClick={signIn} className="cursor-pointer">LogIn</div> )}
        

        <div className=" flex flex-col items-center">
        <div className='flex flex-grow space-x-4'>
        {/* <Avatar onClick={()=>auth.signOut()}
        src={user.photoURL}
        className="hover:animate-bounce cursor-pointer"
        /> */}
        {/* <ArrowDropDownCircleIcon onClick={null}/> */}
        </div>
        <p className="text-gray-200"></p>
        {/* <p className="text-gray-200">{user.displayName}</p> */}
        </div>
        

        </nav>       
    )
}

export default Header
