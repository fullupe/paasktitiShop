
import { useState } from "react";
import Footer from "../components/Footer";
import FooterItem from "../components/FooterItem";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Product from "../components/Product";
import useFirestore from '../hooks/useFirestore';


const Products = () => {
    const { docs } = useFirestore('Products');

    const [selectedImg, setSelectedImg] = useState(null)
    //console.log(price)
    return (
        <main className="  flex w-full min-h-screen justify-center items-center">
            
        <container className="relative flex flex-col space-y-6 bg-blue-900 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white  "  >
            <Header/>

            <div>
            <div className=" flex flex-col justify-between space-y-2 items-center sm:grid  sm:grid-cols-3 sm:flex-row" >
                { docs.map(({id,description,price,url,status})=>(
                   
                <Product setSelectedImg={setSelectedImg} id={id} description={description} price={price} url={url} status={status}/>
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

export default Products
