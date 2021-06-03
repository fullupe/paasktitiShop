import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
import { selectItems, selectTotal} from "../slices/basketSlice";
import CheckOutProducts from "../components/CheckOutProducts";
import { useSession } from "next-auth/client";

import { useRouter } from "next/router";

function Checkout() {
  const [session] = useSession();
  //  const session=true;

    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);

    const router = useRouter();
    console.log(total)


    const GoToPayment=()=>{
      //e.preventDefault();
      router.push('/payments2')

    }

    const GoToPaymentMobileMOney=()=>{
      router.push('/modalPayOnDelivery')

    }
   
    return (
        <main className="  flex w-full min-h-screen justify-center items-center">
            
        <container className="relative flex flex-col space-y-6 bg-blue-900 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white  "  >
            <Header/>

            <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left side */}

        <div className="flex-grow r-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white text-black">
            <h1 className="text-2xl border-b pb-4">
              {items.length === 0 ? "Your Basket is Empty." : "Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckOutProducts
                key={i}
                id={item.id}
                // title={item.title}
                price={item.price}
                description={item.description}
                url={item.url}
                // hasPrime={item.hasPrime}
              />
           
            ))}
                
          </div>
        </div>

        {/* right  */}

        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap text-black">
                subTotal ({items.length}):
                <span className="font-bold">
                  <Currency quantity={total} currency="GHS"/>
                    {/* {total}  */}
                </span>
              </h2>
              <button onClick={GoToPayment}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "sign in to checkout" : "proceed Mobile Money"}
              </button>

              <button onClick={GoToPaymentMobileMOney}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "sign in to checkout" : "proceed to PayOnDelivery"}
              </button>

              
            </>
          )}
        </div>
      </main>

        <footer className="flex flex-grow mt-20 justify-evenly pt-6  items-center ">
          <Footer/>
          </footer>
        </container>
        </main>
    )
}

export default Checkout;
