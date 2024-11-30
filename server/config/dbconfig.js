
// setting up connection to mongodb  database using the mongoose library
const mongoose =require('mongoose');
//disable strict mode
mongoose.set('strictQuery',false)
//connect with database URl
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });


const connection = mongoose.connection;

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successful');
})

connection.on('error', (err)=>{
    console.log('Mongo DB Connection failed');
})
