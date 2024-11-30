// importing axios library.
// Axios is a commonly used JavaScript library  to send HTTP requests from both browser  and Node.js environments

import axios from 'axios';


//the axiosInstance object is configured with custom headers which are content-type with a value of application/json.
//and authorization which has a value that is retrieved from localStorage object.

export const axiosInstance =axios.create({
    headers :{
        'Content-Type': 'application/json',
        authorization : `Bearer ${localStorage.getItem('token')}`
    }
});