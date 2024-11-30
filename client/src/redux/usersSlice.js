import { createSlice } from "@reduxjs/toolkit";


// creating userslice
const usersSlice =createSlice({

    name:"users",
    initialState:{
        user : null,
    },
    reducers:{
        // reducer function takes two arguments 
        setUser : (state,action) =>{
            state.user=action.payload;
        },
        logoutUser: (state) => {
            state.user = null; // Resets the user state
        },  
    },
});

// exports setuser action creator function from the slice. 
export const { setUser, logoutUser } = usersSlice.actions;

// export reducer function  
export default usersSlice.reducer;