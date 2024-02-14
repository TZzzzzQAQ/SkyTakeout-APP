import React from "react";

const CartContext = React.createContext({
    itemDetail: [],
    totalAmount: 0,
    totalPrice: 0,
    subItem: () => {
    },
    addItem: () => {
    }
})

export default CartContext;