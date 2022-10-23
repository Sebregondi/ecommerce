import { createContext, useContext } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";


const CartContext = createContext({
    products: [],
    addtoCart: () => {},
    clearCart: () => {},
    counter: 0,

})

const useCart = () => {
    return useContext(CartContext)
}

const CartContextProvider = ( {children} ) => {

    const [products, setProducts] = useLocalStorage('products',[])

    const addtoCart = ( product ) => {
        setProducts ( products => [...products, product] )
    }

    const clearCart = () => {
        setProducts([])
    }

    const context = {
        products: products,
        addtoCart: addtoCart,
        clearCart: clearCart,
        counter: products.length
    }

  return (
    <CartContext.Provider value={context}>
        {children}
    </CartContext.Provider>
  )
}

export { useCart, CartContextProvider }