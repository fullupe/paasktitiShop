import { useSelector } from "react-redux";
import Orders from "../components/Orders";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import { db, Storage, timestamp } from "../firebase/config";
import firebase from "firebase";
import Currency from "react-currency-formatter";
import { groupBy } from "lodash";

function ModalPayOnDelivery() {

  

  const [state, setState] = useState(null);
  const [delivery, setDelivery] = useState(0);

  const items = useSelector(selectItems);

  const total = useSelector(selectTotal);

  const collectionRef = db.collection("AllOrders");

  const { handleSubmit, register, errors } = useForm();
  const router = useRouter();

  const onSubmitFormToFirestore = ({
    FullName,
    contactNumber,
    Email,
    landMark,
    State,
    //total,
    //city,
    TransactionId,
    
  }) => {
    const createdAt = timestamp();

    collectionRef.add({
      items,
      // groupedItems,
      FullName: FullName,
      ContactNumber: contactNumber,
      Email: Email,
      LandMark: landMark,
      Total: total + delivery,
      State: State,
      // City:city,
      TransactionId: TransactionId,
      // value,
      createdAt,
      status: true,
    });
    router.push("/successful");
    //console.log(value)
  };

  const CancelOrder = (e) => {
    e.preventDefault();
    router.push("/cancelled");
  };

  let glossTotal = 0;

  useEffect(()=>{
    
    if(state==="Lagos =>  Ikeja"){
      setDelivery(Number(1000))
      glossTotal = total  + delivery;
    }else{
      setDelivery(Number(2000))
      glossTotal = total  + delivery;
    }

   

  },[state])

   console.log("okk", glossTotal);
   
   const groupedItems = Object.values(groupBy(items, "id"));

  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-8">
        {/* oders in state */}
        <div className="grid grid-cols-2 items-center  justify-center sm:grid-cols-3">
          {groupedItems.map((item, i) => (
            <Orders
              // key={i}
              id={item[0].id}
              // title={item.title}
              price={item[0].price}
              // description={item.description}
              url={item[0].url}
              qnt={item.length}
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
                    
                    <p> Pay Exact Amount to Accoutn Number: </p>
                          {/* <p>{total + delivery}</p> */}
                   <Currency quantity={ total + delivery} currency="NGN" />
                    <p className="text-base">0160654076</p>
                    <p className="text-base">Gt-Bank</p>
                    <p className="text-base">Abraham Ekow Elegba</p>
                    <h6>
                      <span>
                        Note: Use Payment Transcation id to Fill out the Form Below
                      </span>
                    </h6>
                  </div>
                  <div className="">
                    <legend className="text-center mt-1">Make Payment</legend>

                    <div className="flex flex-col col-lg">
                      <input
                        {...register("FullName", { required: true })}
                        // value={customerName} onChange={(e)=>setCustomerName(e.target.value)}
                        className="input"
                        placeholder="First & Last Name"
                      />
                    </div>

                    <div className="flex flex-col">
                      <input
                        {...register("contactNumber",{ required: true })}
                        //  value={customerContact} onChange={(e)=>setCustomerContact(e.target.value)}
                        className="input"
                        maxLength={10}
                        placeholder="Contact Number"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        {...register("Email",{ required: true })}
                        //  value={customerEmail} onChange={(e)=>setCustomerEmail(e.target.value)}
                        className="input"
                        placeholder="email"
                      />
                    </div>

                    <div className="flex flex-col">
                      <input
                        {...register("State",{ required: true })}
                        onChange={(e) => setState(e.target.value)}
                        list="browsers"
                        id="browser"
                        placeholder="state"
                        className=" input"
                      />
                      <datalist id="browsers">
                        <option value="Abia  => Umuahia " />
                        <option value="Adamawa => Yola" />
                        <option value="Akwa Ibom => Uyo" />
                        <option value="Anambra => Awka" />
                        <option value="Bauchi => Bauchi" />
                        <option value="Bayelsa => Yenagoa" />
                        <option value="Benue => Makurdi" />
                        <option value="Borno => Maiduguri" />
                        <option value="Cross River => Calabar" />
                        <option value="Delta => Asaba" />
                        <option value="Ebonyi => Abakaliki" />
                        <option value="Edo => Benin City" />
                        <option value="Ekiti => Ado Ekiti" />
                        <option value="Enugu => Enugu" />
                        <option value="Gombe => Gombe" />
                        <option value="Imo => Owerri" />
                        <option value="Jigawa => Dutse" />
                        <option value="Kaduna => Kaduna" />
                        <option value="Kano => Kano" />
                        <option value="Katsina => Katsina" />
                        <option value="Kebbi => Birnin Kebbi" />
                        <option value="Kogi =>  Lokoja" />
                        <option value="Kwara =>  Ilorin" />
                        <option value="Lagos =>  Ikeja" />
                        <option value="Nasarawa =>  Lafia" />
                        <option value="Niger =>  Minna" />
                        <option value="Ogun =>  Abeokuta" />
                        <option value="Ondo =>  Akure" />
                        <option value="Osun =>  Oshogbo" />
                        <option value="Oyo =>  Ibadan" />
                        <option value="Plateau =>  Jos" />
                        <option value="Rivers =>  Port Harcourt" />
                        <option value="Sokoto =>  Sokoto" />
                        <option value="Taraba =>  Jalingo" />
                        <option value="Yobe =>  Damaturu" />
                        <option value="Zamfara =>  Gusau" />
                        <option value="FCT =>  Abuja" />
                      </datalist>
                    </div>

                    {/* <div className="flex flex-col">
                      <input
                        {...register("city")}
                        //  value={customerLandMark} onChange={(e)=>setCustomerLandMark(e.target.value)}
                        // defaultValue={city}
                        className="input"
                        placeholder="City"
                      />
                    </div> */}

                    <div className="flex flex-col">
                      <input
                        {...register("landMark",{ required: true })}
                        //  value={customerLandMark} onChange={(e)=>setCustomerLandMark(e.target.value)}
                        className="input"
                        placeholder="Street, House Number"
                      />
                    </div>

                    {/* <div className="flex flex-col">
                      <input
                        {...register("total")}
                        defaultValue={glossTotal}
                        readonly="readonly"
                        // value={total}
                        className="input"
                        placeholder="Amount(GH₵)"
                        //disabled={true}
                      />
                    </div> */}

                    <div className="flex flex-col">
                      <input
                        {...register("TransactionId",{ required: true })}
                        //  value={customerTransactionId} onChange={(e)=>setCustomerTransactionId(e.target.value)}
                        className="input"
                        placeholder="Bank Transaction Number"
                      />
                    </div>
                    <div className="flex flex-col flex-grow border-collapse ">
                      <div className="col-lg text-center mt-2">
                        <button
                          type="submit"
                          className=" button"
                          style={{ padding: "8px 11px" },{ required: true }}
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
