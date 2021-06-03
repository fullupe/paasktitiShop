import Head from 'next/head'
import Image from 'next/image'
// import FooterItem from '../components/FooterItem'
// import Header from "../components/Header"
import UploadForm from '../components/UploadForm'
  import FacebookIcon from '@material-ui/icons/Facebook';
  import InstagramIcon from '@material-ui/icons/Instagram';
  import WhatsAppIcon from '@material-ui/icons/WhatsApp';
  import { useRouter } from "next/router";
  import Header from "../components/Header";
  import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  const [session, loading]=useSession()

  const router = useRouter();

  const GoToAllProducts = (e)=> {
    e.preventDefault();
        router.push('/Products')
  }

  return (
    <div>
      <Head>
        <title>Ghanaian-Beads</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    

    {/* <UploadForm/> */}
    <main className="flex w-full min-h-screen justify-center items-center">

        <container className=" flex flex-col space-y-6 bg-blue-900 w-full max-w-4xl p-8 rounded-xl shadow-xl text-white" >
          <Header/>

          <content className="flex flex-col justify-center items-center sm:flex-row">
            <leftcontent>
              <h1 className="text-2xl uppercase font-bold p-2 justify-around">That's what <br></br><span className="text-4xl">i wanted ...</span></h1>
              <p>Handmade Wrist Bands, very Fashionable Beaded Bracelets Unisex Bangle  Customized with Your Name or Company Brand.</p>

                <button onClick={GoToAllProducts} className="h-10 uppercase w-sm text-red-800 hover:ring-1 ring-gray-200  focus:outline-none active:ring-gray-300 hover:shadow-md p-2 font-bold bg-white  m-4 rounded-full">Show All Products</button>
            </leftcontent>

           

            <rightcontent className=" max-w-sm flex flex-row justify-center items-center transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">

              {/* <img src="https://th.bing.com/th/id/Ra3ac153bd225d28f2b3ef7398c9a5383?rik=G9oJvndCu%2fEmvA&pid=ImgRaw" */}
              {/* <img src='https://res.cloudinary.com/fullupe/image/upload/v1621214089/YOUTUB-J-E-G/5ad4e8a9-e9ca-4555-a6b7-a720e5648e06_3_wmtnfe.png'
               width={300}
               height={400}
               
              /> */}
              
              <Banner/>
              <div className=" flex flex-col p-5 justify-evenly items-center space-y-4">
              <a href="http://"><FacebookIcon/></a>
              <a href="http://"><InstagramIcon/></a>
              <a href="https://api.whatsapp.com/send?phone=+234242261979&text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND"><WhatsAppIcon/></a>
            </div>

          
            </rightcontent>
            

          </content>

          <footer >

            <Footer/>
         
          </footer>
              
          

        </container>
      

      </main>
    
      

      
    </div>
  )
}
