import React, { useEffect, useState } from 'react'; 
import useProducts from '../../../Hooks/useProducts';
import {addToDb, getStoredCart} from '../../../utilities/fakedb'
import Cart from '../../cart/Cart';
import Product from '../Product/Product';
import './Shop.css' 
   
const Shop = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useState([])
 
 

useEffect(() => {
    const storedCart = getStoredCart()
    const savedCart = []
    // console.log(storedCart);
    for(const id in storedCart){
        const addedProduct = products.find(product => id === id)
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity =quantity;
            savedCart.push(addedProduct)
        }
    }
    setCart(savedCart)
},[products])

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart =[]
        const exists =cart.find(product => product.id ===selectedProduct.id)
        if(!exists){
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }
    else{
        const rest = cart.filter(product => product.id !== selectedProduct.id)
        exists.quantity =exists.quantity + 1
        newCart =[...rest,exists]
    }
        setCart(newCart)
        addToDb(selectedProduct.id)
      
    }
    return (
        <div className='shop-container'>
           <div className="products-container">
                 {/* <h3>This is for products : {products.length}</h3> */}
                 {
                     products.map(product => <Product
                         key={product.id}
                         product={product}
                         handleAddToCart ={handleAddToCart}
                         ></Product>)
                 }
           </div>
           <div className="cart-container">
               <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};
 
export default Shop; 