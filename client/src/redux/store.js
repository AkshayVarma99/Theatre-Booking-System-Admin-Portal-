
// import configure store
import { configureStore } from "@reduxjs/toolkit";
import loadersReducer from "./loadersSlice";
import usersReducer from "./usersSlice";


//creating a redux store using the configurestore
const store= configureStore({

    // reducer property maps state slicers to corresponding reducer function
    reducer:{
        loaders:loadersReducer,
        users:usersReducer,
    },
});

export default store;