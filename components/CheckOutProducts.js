import Currency from "react-currency-formatter";
//import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket} from "../slices/basketSlice";
function CheckOutProducts({
    id,
    description,
    price,
    url
   }) {

    const dispatch = useDispatch();

    const addItemToBasket =()=>{
        const product = {
            id,
            description,
            price,
            url
        };
        dispatch(addToBasket(product))

    };

    const removeItemFromBasket =()=>{
        dispatch(removeFromBasket({id}))

    }

   


    return (
        <div className="grid grid-cols-5">
            {/* <Image src={url} height={200} width={200} objectFit="contain" /> */}
            <img src={url}/>
            {/* middle */}
      <div className="col-span-3 mx-5">
          {/* <p>{title}</p> */}
           

          <div className="text-xm mt-2 my-2 line-clamp-2">{description}</div>
             {/* <p>{price}</p> */}
          <Currency quantity={price} currency="GHS" />
            
      </div>
      {/* Right add/Remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button mt-auto" onClick={addItemToBasket}>Add to Basket</button>
        <button className="button mt-auto" onClick={removeItemFromBasket}>Remove from Basket</button>
      </div>
            
        </div>
    )
}

export default CheckOutProducts

