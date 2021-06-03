import ModalPay from "../components/ModalPay"
import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
import { selectItems, selectTotal} from "../slices/basketSlice";
import CheckOutProducts from "../components/CheckOutProducts";
import Orders from "../components/Orders";

function payments2() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    return (
        <>
        <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-8">

         <div className="grid grid-cols-2 items-center  justify-center sm:grid-cols-3">
         {items.map((item, i) => (
              <Orders
                // key={i}
                id={item.id}
                // title={item.title}
                price={item.price}
                description={item.description}
                url={item.url}
                // hasPrime={item.hasPrime}
              />
           
            ))}
        </div>

        <div>
        <ModalPay total={total}/>
        </div>

        </div>

        </div>
        </>

    )
}

export default payments2
