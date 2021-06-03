import { db, Storage, timestamp } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";
import Currency from "react-currency-formatter";
import { signIn, signOut, useSession } from 'next-auth/client'

import firebase from "firebase";
import { useState } from "react";
function AllOrders() {
  const { docs } = useFirestore("AllOrders");
  const [session, loading]=useSession()

  const DeleteItem =(event)=>{

    db.collection("AllOrders").doc(event).delete()
  
    console.log(event)
   
 }
 
  //console.log(docs);
//console.log(order)

// {session.user.email == "fullupe@gmail.com" ? ():(<p className="animate-bounce">"YOU NEED ADMINISTRATIVE RIGHT"</p>)}
  return (
  <div className="">
         
  <div className="grid flex-col space-y-2 items-center justify-items-center sm:space-y-4 sm:grid-cols-2 sm:flex-grow ">
       
     

      {docs.map((order)=>(
         
        
          <div className="flex flex-col h-80 w-80 items-center rounded-lg bg-white text-gray-800 space-y-2 sm:w-59 sm:m-2 ">
        
         <div className="flex flex-row p-2">
             {order.items.map(doc=>(
                
            <img src={doc.url}
                width="50"
                height="50"
                     />
             
             )
             )}
          </div>
          {session.user.email == "fullupe@gmail.com" ? (
         <div className="">
          <p>{order.Email}</p>
          <p>Name        :  {order.FullName}</p>
          <p>Tel         :  {order.ContactNumber}</p>
          <p>T-ID        :  {order.TransactionId}</p>
          <p>Location    :  {order.LandMark}</p>
          <p>Amount: <Currency quantity={order.Total} currency="GHS"/></p>
          </div>
          ):(<p className="animate-bounce"></p>)}

{session.user.email == "fullupe@gmail.com" ? (
          <button disabled={false} onClick={()=>DeleteItem(order.id)} className="inline-block self-center pt-2 rounded-lg bg-cyan-800 text-white font-bold px-6 py-2 uppercase text-sm">delete</button>
          ):(<p className="animate-bounce">"YOU NEED ADMINISTRATIVE RIGHT"</p>)}
          </div>
         
      ))
      }
      
  </div>
  </div>
  
  )
  
  
}

export default AllOrders;
