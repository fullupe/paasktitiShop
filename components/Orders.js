import Currency from "react-currency-formatter";
function Orders({url,description,price,id,qnt}) {
    return (
        <div className="">
            
            <img src={url} width={100} height={100}/>
        
          <div className="col-span-1 mx-5">
        
    
          <div className="text-xm mt-2 my-2 line-clamp-2">{description}</div>
         
          <Currency quantity={price} currency="GHS" />

          <p>Quantity:{qnt}</p>
            
        </div>
      
      
            
        </div>
    )
}

export default Orders;
