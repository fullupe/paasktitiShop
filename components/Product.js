import useFirestore from '../hooks/useFirestore';
// import OrderButtom from './OrderButtom';
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import {addToBasket} from "../slices/basketSlice";
import Image from "next/image";

function Product({setSelectedImg, id,price,description,url,status}) {
  const dispatch = useDispatch();

  const { docs } = useFirestore('Products');

   

   const addItemToBasket =()=>{
    const product = {
      id,
      description,
      price,
      url
   }
    dispatch(addToBasket(product))

   }

    return (

      <div >

      {/* {docs && docs.map(doc =>( */}
      
      <div className="flex flex-col h-60 w-60 items-center rounded-lg bg-white text-gray-800 space-y-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 sm:w-59 sm:m-2 ">
        
           <div key={id} onClick={()=>setSelectedImg(url)} className="p-2 h-28 ">

          <img layout="responsive"
             src={url} alt="" 
              width='100'
              height='100'/>
          </div>

          <div className="mt-2">
            <p>{description}</p>
            <p className="mt-2">
           {/* <small>₦ </small> */}
           <strong>
           <Currency quantity={price} currency="GHS" />
             </strong>
          </p>

          <div className={`text-bold uppercase ${status ? "text-green-800" : "text-red-800"}`}>
          <p className="font-bold ">{status ?  "Instock" : "Out of Stock"}</p>
          </div>
        
           </div>

          

           <div className="p-2 flex items-center ">
             <button onClick={addItemToBasket} className="inline-block self-end rounded-lg bg-cyan-800 text-white font-bold px-6 py-2 uppercase text-sm">Place Order</button>
           </div>
      


        </div>

         {/* ))} */}

        </div>
      
    )
}

export default Product;
