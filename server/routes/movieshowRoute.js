
//imports  express router module
const router = require('express').Router();
const Movie=require("../models/movieshowsModel")
const authMiddleware = require('../middlewares/authMiddleware');
//const User = require('../models/movieshowsModel');




//Add a new movie
// endpoint for adding new draft movie (by default it is draft)to the db
// function is triggered when client sends post request to this endpoint
// protected by authMiddleware (user must be authenticated to access)

router.post('/add-draft-movie-shows',authMiddleware, async(req,res)=>{

try{
    //new instance of movie model
    const newdraftMovie = new Movie(req.body);
    //saves
    await newdraftMovie.save();
    res.send(
        {
            success:true,
            message:"Movie Show is added Successfully"
        }
    )
} catch(error){
    res.send({
        success:false,
        message:error.message,

    });
}



});


//get all draft movies
// endpoint for getting all draft movie from the db
// function is triggered when client sends get request to this endpoint
// protected by authMiddleware (user must be authenticated to access)

router.get("/get-all-draft-movie-shows", async(req,res)=>{

    try {
        // find where isDrfat is true. results sorted in descending order
        const movies=await Movie.find({isDraft:true}).sort({createdAt:-1});
        res.send({
            success:true,
            message:"movies fetched successfully",
            data:movies
        })
    } catch (error) {
     res.send({
        success:false,
        message:error.message,
     });
        
    }
});


//get all published movies
// endpoint for getting all published movie from the db
// function is triggered when client sends get request to this endpoint
// protected by authMiddleware (user must be authenticated to access)

router.get("/get-all-publish-movie-shows", async(req,res)=>{

    try {
        // find where isDraft is false
        const movies=await Movie.find({isDraft:false}).sort({createdAt:-1});
        res.send({
            success:true,
            message:"movies fetched successfully",
            data:movies
        })
    } catch (error) {
     res.send({
        success:false,
        message:error.message,
     });
        
    }
});


//update a draft movie
// endpoint for updating a draft movie from the db
// function is triggered when client sends post request to this endpoint
// protected by authMiddleware (user must be authenticated to access)



router.post("/update-draft-movie-show",authMiddleware, async(req,res)=>{


    try{

        
       // find movie bye id and update it
        await Movie.findByIdAndUpdate(req.body.draftmovieID,req.body);
       // await Movie.findByIdAndUpdate(req.body.movieID, { isLocked: true });
        res.send({
            success:true,
            message:"Movie updated successfully",
        });
    
    }catch (error){
        res.send({
            success:false,
            message: error.message,
        });
    }

});



//delete a movie
// endpoint for deleting a draft movie from the db
// function is triggered when client sends post request to this endpoint
// protected by authMiddleware (user must be authenticated to access)

router.post("/delete-draft-movie-show",authMiddleware, async(req,res)=>{
    try{
        // find by id and delete
        await Movie.findByIdAndDelete(req.body.movieID);
        res.send({
            success:true,
            message:"Movie Deleted Successfully",
        });
    }catch(error){
        res.send({
            success: false,
            message:error.message,
        });
    }
});


// to unlock the movie pr document once editing is done
// endpoint for  unlocking draft movie from the db
// function is triggered when client sends post request to this endpoint
// protected by authMiddleware (user must be authenticated to access)



router.post("/edit-draft-movie-show-check-done",authMiddleware, async(req,res)=>{


    try{

        
       
       // set is false after editing 
        await Movie.findByIdAndUpdate(req.body.movieID, { isLocked: false });
        res.send({
            success:true,
            message:"Movie unlocked from editing",
        });
    
    }catch (error){
        res.send({
            success:false,
            message: error.message,
        });
    }

});







// to lock the movie or document once editing is done
// endpoint for locking draft movie from the db
// function is triggered when client sends post request to this endpoint
// protected by authMiddleware (user must be authenticated to access)





router.post("/edit-draft-movie-show-check", authMiddleware, async (req, res) => {
    try {
      const movie = await Movie.findById(req.body.movieID);
      // if true
      if (movie.isLocked) {
        res.send({
          success: false,
          message: "The movie is currently being edited by another admin.",
        });
      } else {
        // update lock
        await Movie.findByIdAndUpdate(req.body.movieID, { isLocked: true });
        res.send({
          success: true,
          message: "The movie is now locked and can be edited by the current admin.",
        });
      }
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
  });
  


  
// to publish draft movie
// endpoint for publishing a  draft movie from the db
// function is triggered when client sends post request to this endpoint
// protected by authMiddleware (user must be authenticated to access)

router.post("/publish-draft-movie-show",authMiddleware, async(req,res)=>{
    try{
        await Movie.findByIdAndUpdate(req.body.movieID,{isDraft:false});
        res.send({
            success:true,
            message:"Movie Published Successfully",
        });
    }catch(error){
        res.send({
            success: false,
            message:error.message,
        });
    }
});


// to  draft published movie
// endpoint for making a published movie a  draft movie from the db
// function is triggered when client sends post request to this endpoint
// protected by authMiddleware (user must be authenticated to access)


router.post("/draft-published-movie-show",authMiddleware, async(req,res)=>{
    try{
        await Movie.findByIdAndUpdate(req.body.movieID,{isDraft:true});
        res.send({
            success:true,
            message:"Movie sent to draft Successfully",
        });
    }catch(error){
        res.send({
            success: false,
            message:error.message,
        });
    }
});



module.exports=router;