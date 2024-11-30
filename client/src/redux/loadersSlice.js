
//importing createSlice
import {createSlice} from '@reduxjs/toolkit';

// creates new slice of redux state called loaders
 const loadersSlice=createSlice({

    // name is loaders
    name: 'loaders',
    initialState:{
        // property is loadin and initial is false
        loading: false,
    },
    reducers:{
        // two reducer functions
        ShowLoading : (state)=>{
            state.loading=true;
        },
        HideLoading: (state)=>{
            state.loading=false;
        }
    }
});

//exports the action creators from slice. use to dispatch  actions to update the states
export const {ShowLoading, HideLoading}= loadersSlice.actions;

// export reducer functions that can be used to update the state when actions are dispatched
export default loadersSlice.reducer;
