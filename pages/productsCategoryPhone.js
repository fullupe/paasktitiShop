import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import Modal from "../components/Modal";
import Product from "../components/Product";
import useFirestore from '../hooks/useFirestore';

function ProductsCategoryPhone() {
    const { docs } = useFirestore('Products');
    const [selectedImg, setSelectedImg] = useState(null)
    return (
        <main className="flex w-full min-h-screen justify-center items-center bg-gray-800">
            
        <container className=" flex flex-col space-y-6 bg-blue-900 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white  "  >
            <Header title="-Phones"/>
            
            <div>
            <div className=" flex flex-col justify-between space-y-2 items-center sm:grid  sm:grid-cols-3 sm:flex-row" >
                { 
                docs.filter(doc=>doc.category=='Phones & Accessories')

                .map(({id,description,price,url,status,category})=>(
                   
                <Product setSelectedImg={setSelectedImg} id={id} description={description} price={price} url={url} status={status} category={category}/>
                //{selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
            ))

            }

           {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
           
            </div>
            </div>

        <footer className="flex flex-grow mt-20 justify-evenly pt-6  items-center ">
          <Footer/>
          </footer>
        </container>
        </main>
    )
}

export default ProductsCategoryPhone
