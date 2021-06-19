import { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Login from "../components/Login"
import UploadForm from '../components/UploadForm'
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from 'next-auth/client'

function AdminPannelOnly() {
    const router = useRouter();

    const [session, loading]=useSession()

    // const logInUser = session.user.email;

  //console.log(logInUser)
    return (
        <main className="flex w-full min-h-screen justify-center items-center bg-gray-800">
            
        <container className=" flex flex-col space-y-6 bg-blue-900 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white  "  >
            <Header title="-ADMIN PANNEL"/>
            
            {session ? ( <UploadForm />) : ( ()=>router.push('/') )}
            
           
            <div className="">
            <div className="flex flex-col justify-between space-y-2 items-center sm:grid  sm:grid-cols-3 sm:flex-row">
           
            </div>
            </div>

        <footer className="flex flex-grow mt-20 justify-evenly pt-6  items-center ">
          <Footer/>
          </footer>
        </container>
        </main>
    )
}

export default AdminPannelOnly
