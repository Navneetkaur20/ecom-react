export const removeFromCart = (productId) => {
    console.log(productId)
    return {
        type: 'REMOVE_FROM_CART',
        payload: productId
    }
}

export const increment = (productId) => {
    return {
        type: 'INCREMENT',
        payload: productId
    }
}
export const decrement = (productId) => {
    return {
        type: 'DECREMENT',
        payload: productId
    }
}
