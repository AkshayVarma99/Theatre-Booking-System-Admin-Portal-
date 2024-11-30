// import axios from "axios";

const { axiosInstance } = require(".");

// Register a new user 

//The function RegisterUser  is an asynchronous function. It used an axiosInstance to send a Post request to api/users/registers endpoint

export const RegisterUser= async (payload)=>{
try {
    const response =await axiosInstance.post("/api/users/register",payload);
    return response.data;
} catch (error) {
    return error.response;
}

};

// login a  user 

//The function LoginUser  is an asynchronous function. It used an axiosInstance to send a Post request to api/users/login endpoint

export const LoginUser= async (payload)=>{
    try {
        const response =await axiosInstance.post("/api/users/login",payload);
        return response.data;
    } catch (error) {
        return error.response;
    }
    
    }

    // get current user

    //The function GetCurrentUser  is an asynchronous function. It used an axiosInstance to send a get request to api/users/get-current-user endpoint
    export const GetCurrentUser = async ()=>{
        try{
            const response = await axiosInstance.get("/api/users/get-current-user");
            return response.data;
        } catch ( error){
            return error;
        }

    }