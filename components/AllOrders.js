import { db, Storage, timestamp } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";
import Currency from "react-currency-formatter";
import { signIn, signOut, useSession } from "next-auth/client";

import firebase from "firebase";
import { useState } from "react";
import { groupBy } from "lodash";
import { Divider } from "@material-ui/core";
function AllOrders() {

  // const [customerOrders,setCustomerOrders]=useState([]);

  const { docs } = useFirestore("AllOrders");
  const [session] = useSession();

  const DeleteItem = (event) => {
    db.collection("AllOrders").doc(event).delete();

    console.log(event);
  };



  const   mynewObject = docs.map((mapItem)=>{
    return Object.values(groupBy(mapItem.items,"url"));
    // console.log("w",newnew)
    // console.log("all",mynewObject)
  });
  return (
    <div className="">
      <div className="grid flex-col space-y-2 items-center justify-items-center sm:space-y-4 sm:grid-cols-2 sm:flex-grow ">
        {docs.map((order) => (
          <div key={order.id} className="flex flex-col h-full w-80 items-center rounded-lg bg-white text-gray-800 space-y-2 sm:w-59 sm:m-2 ">
            <div className="flex flex-row p-2">
              
              { 
                 Object.values(groupBy(order.items,"id")).
             map((doc) => (
               <div className="flex-col">

                 <div className="h-8 w-8 mt-1 items-center">
                <img className="object-contain" src={doc[0].url} width="50" height="50" />
                </div >

                <div className=" text-sm p-2  flex  mt-1 ">
                <p>{doc[0].description}</p>
                </div>

                <div className=" text-sm p-2  mt-1 flex items-center ">
                <p className="">qnt:{doc.length}</p>
                </div>

                </div>
              ))
              
              }
              
            </div>
            {session.user.email == "fullupe@gmail.com" ? (
              <div className="mt-4">
                <p>{order.Email}</p>
                <p>Name : {order.FullName}</p>
                <p>Tel : {order.ContactNumber}</p>
                <p>T-ID : {order.TransactionId}</p>
                <p>State : {order.State}</p>
                <p>Location : {order.LandMark}</p>
                <p>
                  Amount: <Currency quantity={order.Total} currency="GHS" />
                </p>
              </div>
            ) : (
              <p className="animate-bounce"></p>
            )}

            {session.user.email == "fullupe@gmail.com" ? (
              <button
                disabled={false}
                onClick={() => DeleteItem(order.id)}
                className="inline-block self-center pt-2 rounded-lg bg-cyan-800 text-white font-bold px-6 py-2 uppercase text-sm"
              >
                delete
              </button>
            ) : (
              <p className="animate-bounce">"YOU NEED ADMINISTRATIVE RIGHT"</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllOrders;
