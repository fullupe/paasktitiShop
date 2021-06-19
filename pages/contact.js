import FooterItem from "../components/FooterItem"
import Header from "../components/Header"
import { 
    PhoneIcon,
    LocationMarkerIcon,
    MailIcon,
    } from "@heroicons/react/outline";

    import FacebookIcon from '@material-ui/icons/Facebook';
  import InstagramIcon from '@material-ui/icons/Instagram';
  import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Footer from "../components/Footer";


function Contact() {
    return (
        <main className="flex w-full min-h-screen justify-center items-center bg-gray-800">
            
        <container className=" flex flex-col space-y-6 bg-blue-900 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white "  >
            <Header/>

            <div className="flex flex-col sm:flex-row sm:space-x-8">
            <content className=" flex flex-col space-y-8  justify-between ">
               
                    <div>
                        <h1 className="font-bold text-4xl trancate-wide">Contact Us</h1>
                        <p className="pt-2 text-cyan-100 text-sm" >
                        Just Give us a Call or Send Message for any of Our Products....  
                       
                            
                            </p>
                    </div>

                    <div className="flex flex-col space-y-6">

                    <div className="inline-flex space-x-2 items-center">
                        <PhoneIcon className="h-8 mb-1 text-teal-300 text-xl"/>
                        <span>+(233)242 261979</span>

                    </div>

                    <div className="inline-flex space-x-2 items-center">
                        <MailIcon className="h-8 mb-1 text-teal-300 text-xl"/>
                        <span>wnk.gyekye@gmail.com</span>

                    </div>

                    <div className="inline-flex space-x-2 items-center">
                        <LocationMarkerIcon className="h-8 mb-1 text-teal-300 text-xl"/>
                        <span>Tema-comm5 School-Road</span>

                    </div>

                    </div>

                    <div className="flex space-x-4 mb-2">
                    <a href="http://"><FacebookIcon/></a>
                    <a href="http://"><InstagramIcon/></a>
                    <a href="http://"><WhatsAppIcon/></a>
                    </div>
                   
                    </content>
                   
                    <div className=" bg-white rounded-xl shadow-lg p-8  mt-2 text-gray-600 font-bold md:w-80">
                    
                        <form action="" className="flex flex-col space-y-4">
                            
                            <div>
                                <label for="" className="text-sm">Your Name</label>
                                <input type="text" placeholder="Name" 
                                className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                            </div>

                    
                            <div>
                            <label for="" className="text-sm">Your E-Mail</label>
                                <input type="text" placeholder="E-Mail" 
                                className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                            </div>

                            <div>
                            <label for="" className="text-sm">Your Message</label>
                                <textarea type="text" placeholder="Message" rows="4" 
                                className="ring-1 ring-gray-300 w-full mt-2  rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                            </div>

                            {/* <div> */}
                            <button className="inline-block self-end rounded-lg bg-cyan-800 text-white font-bold px-6 py-2 uppercase text-sm">send message</button>
                            {/* </div> */}
                            

                        </form>
                        </div>
                    </div>
    

                <rightcontent className=" flex flex-row justify-center items-center transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">

                </rightcontent>

            

        <footer>
            <Footer/>
         
          </footer>
        </container>
        </main>
    )
}

export default Contact
