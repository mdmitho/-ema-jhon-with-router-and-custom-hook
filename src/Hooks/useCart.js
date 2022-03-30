import { useEffect, useState } from "react"
import Product from "../components/Header/Product/Product"
import { getStoredCart } from "../utilities/fakedb"

const useCart = (products)=>{
    const [cart, setCart] = useState([])
    useEffect(() => {
 const storedCart = getStoredCart()
 const savedCart = []
 for (const id in storedCart){
     const addedProduct = products.find(Product => Product.id === id);

    if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct)
    }
 }

 setCart(savedCart)
    },[products])
    return [cart, setCart]
}

export default useCart