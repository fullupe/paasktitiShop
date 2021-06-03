import useFirestore from '../hooks/useFirestore';
import Product from "../components/Product"

function ProductFeed() {
    const { docs } = useFirestore('Products');
    return (
        <div className=" flex flex-col justify-between space-y-2 items-center sm:grid  sm:grid-cols-3 sm:flex-row">
            
        </div>
    )
}

export default ProductFeed
