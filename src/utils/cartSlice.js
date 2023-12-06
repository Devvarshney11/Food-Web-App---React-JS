import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state,action) =>{
            state.items.push(action.payload);
        },
        removeItem : (state,action) => {
            const index = state.items.findIndex((item) => item.imageId === action.payload);
            if(index >= 0){
                state.items.splice(index,1);
            }
        },
        emptyCart: (state) => {
            state.items = [];
        }
    }
});

export const {addItems,removeItem,emptyCart} = cartSlice.actions;
export default cartSlice.reducer;