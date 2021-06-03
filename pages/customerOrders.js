import AllOrders from "../components/AllOrders";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from "next/router";

function CustomerOrders() {
    const {session,loading}=useSession()
    const router = useRouter();
    return (
        <main className="flex w-full min-h-screen justify-center items-center">
            
        <container className=" flex flex-col space-y-6 bg-blue-900 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white  "  >
            <Header title="-ADMIN ORDERS"/>

                {/* {session.user.name} */}
           
        
            <div className="">
            {/* <div className=""><button className="">Manage Product</button></div> */}
            <div className="flex flex-col justify-between space-y-0 items-center ">
            <div className="p-4 py-4 "><button onClick={()=>router.push('/AdminPannelOnly')} className="bg-cyan-500 p-2 rounded-md focus:outline-none focus:ring-2 hover:bg-cyan-300">Manage Product</button></div>
                {session? (<AllOrders/>):""}
            
            </div>
            </div>
                

        <footer className="flex flex-grow mt-20 justify-evenly pt-6  items-center ">
          <Footer/>
          </footer>
        </container>
        </main>
    )
}

export default CustomerOrders
