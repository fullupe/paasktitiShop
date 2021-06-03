
import { CheckIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
function Successful() {
  const router = useRouter();
    return (
        <div className="flex w-full min-h-screen justify-center items-center">

           
            <div className="bg-white rounded-xl shadow-lg p-8  mt-2 text-gray-600 font-bold md:w-80">
            <legend className="text-center mt-1">PAYMENT SUCEESSFUL</legend>

           <div div className="flex flex-col items-center text-sm ">
            <p>Yor orders will be shipped and u will be contacted. </p>
            <small>Thank you for shopping with us</small>
          </div>
            <>
               <CheckIcon className="text-center text-green-500 animate-bounce"/>
                </>
             

                    <div className="col-lg text-center mt-2">
                      <button onClick={()=>{router.push("/Products")}}
                       
                        className=" button"
                        style={{ padding: "8px 11px" }}
                      >
                        <strong>Back to Shop</strong>
                      </button>
                    </div>
            </div>
        
        


      
        </div>
    )
}

export default Successful
