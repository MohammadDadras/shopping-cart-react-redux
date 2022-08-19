export const cartReducer = (state = { cartItems: [] ,numberCart : 0}, action) => {

    switch (action.type) {

        case 'CART_ADD_ITEM':
            const item = action.payload

            const existingItem = state.cartItems.find((i) => i.product === item.product
            )

            if (existingItem) {

                return {
                    ...state,
                    cartItems: state.cartItems.map((i) => i.product === existingItem.product ? item : i
                    )
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case 'CART_REMOVE_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.product !== action.payload)
            }

        case 'INCREASE_QUANTITY':
            return {
               
                numberCart : state.numberCart + 1

            }
        default:
            return state
    }
}