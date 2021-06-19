import Footer from "./Footer"
// import Header from "./Header"
import { useState,useEffect,useRef } from "react"
import Product from "./Product"
import Modal from "../components/Modal"
import useFirestore from '../hooks/useFirestore';
import {db, Storage, timestamp} from '../firebase/config';
import Currency from "react-currency-formatter";

function EditProductForm() {
    const { docs } = useFirestore('Products');
    


    const[inputdescription, setInputdescription]=useState(null)
    const[inputprice, setInputprice]=useState(0)
    
   

    const DeleteItem =(event)=>{

        db.collection("Products").doc(event).delete()
      
        console.log(event)
       
     }

    
            // update statuse to instock
     const SwitchStatusInstock =(e)=>{
        db.collection("Products").doc(e).update({
            
             status: false,    
        })

     }
            //update status to out of stock
     const SwitchStatusOutstock =(en)=>{
        db.collection("Products").doc(en).update({
            
            status: true,     
       })
    }



     const UpdateItem =(event)=>{

        db.collection("Products").doc(event).update({

            description:inputdescription,
            price:inputprice
    
        }) 
            setInputdescription("");
            setInputprice("");
       
     }

    return (
        <main className="  flex w-full min-h-screen justify-center items-center">
            
        <container className="relative flex flex-col space-y-6 bg-blue-900 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white  "  >
            {/* <Header/> */}
            
            <div>
            <div className=" " >
            <div className=" flex flex-col justify-between space-y-2 items-center sm:grid  sm:grid-cols-3 sm:flex-row">

{docs && docs.map(doc =>(

<div className="flex flex-col h-70 w-60 items-center rounded-lg bg-white text-gray-800 space-y-2 sm:w-59 sm:m-2 ">
  
     <div key={doc.id} onClick={null} className="p-2 h-28 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
     {/* <div key={doc.id} onClick={()=>setSelectedImg(doc.url)} className="p-2 h-28 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"> */}

    <img 
       src={doc.url} alt="" 
        width="100"
        height="100"/>
    </div>

    <div className="mt-2">
      <p>{doc.description}</p>
      <p className="mt-2">
     {/* <small>₦</small> */}
     <strong><Currency quantity={doc.price} currency="NGN" /></strong>
     
    </p>

  
    <div className="flex flex-col items-center p-1 max-w-5">
        <input  className="max-w-1 " value={inputdescription} onChange={e=>setInputdescription(e.target.value)} type="text" placeholder="New Description "/>
        <input className="max-w-1 " value={inputprice} onChange={e=>setInputprice(e.target.value)} type="number"  placeholder="New Price"/>
    </div>
    
  
     </div>

     
     <div className="flex items-center space-x-4">
     <input onChange={()=>SwitchStatusInstock(doc.id)} type="checkbox"/> OUT-STOCK
     <input onChange={()=>SwitchStatusOutstock(doc.id)} type="checkbox"/> INSTOCK
     </div>
    
     <div className="p-2 space-x-2 flex items-center ">
       <button onClick={()=>DeleteItem(doc.id)} className="inline-block self-end rounded-lg bg-cyan-800 text-red-800 font-bold px-6 py-2 uppercase text-sm">Delete</button>
       <button disabled={!inputprice || !inputdescription} onClick={()=>UpdateItem(doc.id)} className="inline-block self-end rounded-lg bg-cyan-800 text-white font-bold px-6 py-2 uppercase text-sm">Update</button>
     </div>
    

  </div>

  

  ))}

  </div>
              
            </div>
            </div>

        <footer className="flex flex-grow mt-20 justify-evenly pt-6  items-center ">
          {/* <Footer/> */}
          </footer>
        </container>
        </main>
    )
}

export default EditProductForm
