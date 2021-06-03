import { XIcon } from "@heroicons/react/outline";
function Cancelled() {
    return (
        <div className="flex w-full min-h-screen justify-center items-center">

           
        <div className="bg-white rounded-xl shadow-lg p-8  mt-2 text-gray-600 font-bold md:w-80">
        <legend className="text-center mt-1">PAYMENT CANCELLED</legend>

        

        <div>
           <XIcon className="text-center text-red-500 animate-bounce"/>
            </div>
         

                <div className="col-lg text-center mt-2">
                  <button
                   
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

export default Cancelled
