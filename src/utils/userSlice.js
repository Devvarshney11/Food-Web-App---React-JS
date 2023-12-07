import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:{
            name:"Dev Varshney",
            email:"abc@gmail.com",
            password:"123456",
            phone:"9368015704",
        },
    },
});
export default userSlice.reducer;