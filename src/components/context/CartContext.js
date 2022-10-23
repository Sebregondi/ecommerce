import { createContext, useContext, useState } from "react";

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

    const [products, setProducts] = useState([])

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