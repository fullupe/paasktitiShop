import { useSelector } from "react-redux";
import Orders from "../components/Orders";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useForm} from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import {db, Storage, timestamp} from '../firebase/config';
import firebase from "firebase"

function ModalPayOnDelivery() {
 const items = useSelector(selectItems);

  const total = useSelector(selectTotal);

  const collectionRef = db.collection('AllOrders'); 

 const {handleSubmit, register, errors}= useForm();
  const router = useRouter();


  const onSubmitFormToFirestore=({FullName,contactNumber,Email,landMark,total,TransactionId,}) =>{
    const createdAt = timestamp()
   
    collectionRef.add(
      {
      
       items,
      FullName:FullName,
      ContactNumber:contactNumber,
      Email:Email,
      LandMark:landMark,
      Total:total,
      //Amount:Amount,
      TransactionId:TransactionId,
      // value,
      createdAt,
      status:true,
      
    })
    router.push('/successful')
    //console.log(value)

  }

  const CancelOrder = (e) => {
    e.preventDefault();
    router.push("/cancelled");
  };

  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-8">
        {/* oders in state */}
        <div className="grid grid-cols-2 items-center  justify-center sm:grid-cols-3">
          {items.map((item, i) => (
            <Orders
              // key={i}
              id={item.id}
              // title={item.title}
              price={item.price}
              // description={item.description}
              url={item.url}
              // hasPrime={item.hasPrime}
            />
          ))}
        </div>
        {/* orders in state */}

        <div
          id="ipayModal"
          className="modal fade m-auto"
          role="dialog"
          data-keyboard="true"
          data-backdrop="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img
                  src="http://fpoimg.com/95x65?text=Logo"
                  className="mx-auto d-block logo"
                />
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8  mt-2 text-gray-600 font-bold md:w-80">
                <form
                  // action="http://localhost:3000/successful"
                  onSubmit={handleSubmit(onSubmitFormToFirestore)}
                >
                  <div className=" flex flex-col space-y-1 bg-cyan-800 rounded-lg p-5 text-xs items-center text-white">
                    <p> Pay Exact Amount to MTN mobile Number: </p>
                    <p className="text-base">0242261979</p>
                    <h6>
                      <span>
                        Note: use Transcation id to Fill out the Form Below{" "}
                      </span>
                    </h6>
                  </div>
                  <div className="">
                    <legend className="text-center mt-1">Make Payment</legend>

                    <div className="flex flex-col col-lg">
                      <input
                      {...register("FullName",{required:true})}
                      // value={customerName} onChange={(e)=>setCustomerName(e.target.value)}
                        className="input"
                        placeholder="First & Last Name"
                      />
                    </div>

                    <div className="flex flex-col">
                      <input
                      {...register("contactNumber")}
                      //  value={customerContact} onChange={(e)=>setCustomerContact(e.target.value)}
                        className="input"
                        maxLength={10}
                        placeholder="Contact Number"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                      {...register("Email")} 
                      //  value={customerEmail} onChange={(e)=>setCustomerEmail(e.target.value)}
                      className="input" 
                      placeholder="email" 
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                      {...register("landMark")}
                      //  value={customerLandMark} onChange={(e)=>setCustomerLandMark(e.target.value)}
                        className="input"
                        placeholder="Land Mark eg: TEMA SCHOOL ROAD H/N D77"
                      />
                    </div>

                    <div className="flex flex-col">
                      <input
                      {...register("total")}
                      defaultValue={total}
                      readonly="readonly"

                        // value={total}
                        className="input"
                        placeholder="Amount(GH₵)"
                        //disabled={true}
                      />
                    </div>

                    <div className="flex flex-col">
                      <input
                      {...register("TransactionId")}
                      //  value={customerTransactionId} onChange={(e)=>setCustomerTransactionId(e.target.value)}
                        className="input"
                        placeholder="Mobile Money Transaction Number"
                      />
                    </div>
                    <div className="flex flex-col flex-grow border-collapse ">
                      <div className="col-lg text-center mt-2">
                        <button
                          type="submit"
                          className=" button"
                          style={{ padding: "8px 11px" }}
                        >
                          <strong>Pay</strong>
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="col-lg text-center mt-2">
                        <button onClick={CancelOrder} className="">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer justify-content-center ">
                    <div className="flex flex-col">
                      <div className="flex "></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPayOnDelivery;
