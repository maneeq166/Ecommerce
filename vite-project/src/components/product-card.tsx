import { FaPlus } from "react-icons/fa";

type ProductProps = {
    stock:number,
    price:number,
    name:string,
    productId:string,
    photo:string,
    handler:()=>void;
}

function ProductCard({stock,price,name,productId,photo,handler}:ProductProps) {
    const server = 'jfasdhfasdf'
  return (
    <div className="productcard">
        <img 
        // src={`${server}/${photo}`} 
        src={photo} className="object-cover h-full w-full" alt="" />
        <p>{name}</p>
        <span>₹{price}</span>
        <div>
            <button onClick={()=>handler()}>
                <FaPlus/>
            </button>
        </div>
    
    </div>
  )
}

export default ProductCard
