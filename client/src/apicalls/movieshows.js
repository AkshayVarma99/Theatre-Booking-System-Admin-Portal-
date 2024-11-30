
// importing axios library.
// Axios is a commonly used JavaScript library  to send HTTP requests from both browser  and Node.js environments

import axios from "axios";

// The below code imports an object named axiosInstance. 

const { axiosInstance } = require(".");


//to add a new Movie

//The function AddMovieShow  is an asynchronous function. It used an axiosInstance to send a Post request to api/movieShows/add-draft-movie-shows endpoint

export const AddMovieShow=async (payload)=>{
    try {
        const response=await axiosInstance.post("api/movieShows/add-draft-movie-shows",payload);
        return response.data;
    } catch (error) {
        return error.response;
        
    }
}

// to get all draft movies

//The function GetAllDraftMovieShows  is an asynchronous function. It used an axiosInstance to send a get request to api/movieShows/get-all-draft-movie-shows endpoint

export const GetAllDraftMovieShows= async()=>{
    try{
        const response=await axiosInstance.get("/api/movieShows/get-all-draft-movie-shows");
        return response.data;
    }catch(error){
        return error.response;
    }
}


//to get all published movies

//The function GetAllPublishMovieShows  is an asynchronous function. It used an axiosInstance to send a get request to api/movieShows/get-all-publish-movie-shows endpoint
export const GetAllPublishMovieShows= async()=>{
    try{
        const response=await axiosInstance.get("/api/movieShows/get-all-publish-movie-shows");
        return response.data;
    }catch(error){
        return error.response;
    }
}


//to update a draft movie
//The function UpdateDraftMovieShow  is an asynchronous function. It used an axiosInstance to send a post request to api/movieShows/update-draft-movie-show endpoint
export const UpdateDraftMovieShow=async(payload)=>{
    try {
        
        const response=await axiosInstance.post("api/movieShows/update-draft-movie-show",payload);
        return response.data;
    } catch (error) {
        return error.response;
        
    }
}


//to delete a draft movie
//The function DeleteDraftMovieShow  is an asynchronous function. It used an axiosInstance to send a post request to api/movieShows/delete-draft-movie-show endpoint

export const DeleteDraftMovieShow=async(payload)=>{
    try {
        const response=await axiosInstance.post("api/movieShows/delete-draft-movie-show",payload);
        return response.data;
    } catch (error) {
        return error.response;
        
    }
}

//to lock a movie (set isLocked true) when a movie is being edited
//The function EditDraftMovieShowCheck  is an asynchronous function. It used an axiosInstance to send a get request to api/movieShows/edit-draft-movie-show-check endpoint


export const EditDraftMovieShowCheck=async(payload)=>{
    try {
        const response=await axiosInstance.post("api/movieShows/edit-draft-movie-show-check",payload);
        return response.data;
    } catch (error) {
        return error.response;
        
    }
}

//to unlock a movie (set isLocked false) when a movie is done being edited
//The function EditDraftMovieShowCheckDone  is an asynchronous function. It used an axiosInstance to send a get request to api/movieShows/edit-draft-movie-show-check-done endpoint


export const EditDraftMovieShowCheckDone=async(payload)=>{
    try {
        const response=await axiosInstance.post("api/movieShows/edit-draft-movie-show-check-done",payload);
        return response.data;
    } catch (error) {
        return error.response;
        
    }
}

//to publish a draft movie
//The function PublishDraftMovieShow  is an asynchronous function. It used an axiosInstance to send a get request to api/movieShows/publish-draft-movie-show endpoint


export const PublishDraftMovieShow=async(payload)=>{
    try {
        const response=await axiosInstance.post("api/movieShows/publish-draft-movie-show",payload);
        return response.data;
    } catch (error) {
        return error.response;
        
    }
}

//to draft a published movie
//The function DraftPublishedMovieShow  is an asynchronous function. It used an axiosInstance to send a get request to api/movieShows/draft-published-movie-show endpoint


export const DraftPublishedMovieShow=async(payload)=>{
    try {
        const response=await axiosInstance.post("api/movieShows/draft-published-movie-show",payload);
        return response.data;
    } catch (error) {
        return error.response;
        
    }
}