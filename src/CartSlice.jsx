import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initial state for cart items
    },
    reducers: {
        addItem: (state, action) => {
            const { name, quantity } = action.payload; // Destructure name and quantity from payload
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += quantity; // Increment quantity if item already exists
            } else {
                state.items.push({ name, quantity }); // Push new item with name and quantity
            }
        },
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload; // Destructure name and quantity from payload
            const item = state.items.find(item => item.name === name);
            if (item) {
                item.quantity = quantity; // Update quantity if item exists
            }
        },
        removeItem: (state, action) => {
            const name = action.payload; // Directly use payload as the item name
            const index = state.items.findIndex(item => item.name === name);
            if (index !== -1) {
                state.items.splice(index, 1); // Remove item from cart
            }
        },
    },
});

// Export the action creators
export const { addItem, updateQuantity, removeItem } = cartSlice.actions;
// Export the reducer for the cart slice
export default cartSlice.reducer;
