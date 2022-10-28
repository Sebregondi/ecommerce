import { Children, createContext, useContext } from "react";
// import useLocalStorage from "../../hooks/useLocalStorage";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([])

    const clearCart = () => setCart([])

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false
    
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

    const addProduct = () => {}

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider



    // const [products, setProducts] = useLocalStorage('products',[])