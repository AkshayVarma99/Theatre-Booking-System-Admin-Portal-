import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import dune from '../pages/images/dune.jpg';
import quiet from '../pages/images/quiet.jpg';
import dog from '../pages/images/dog.jpg';
import squid from '../pages/images/squidgame.jpg';
import defaultPoster from '../pages/images/default-poster.jpg';  
import { GetAllPublishMovieShows } from '../apicalls/movieshows';
import { message } from 'antd';

const MovieDetail = () => {
    const { movieName } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await GetAllPublishMovieShows();
                if (response.success) {
                    const formattedMovieName = movieName.toLowerCase().replace(/-/g, ' ');
                    const foundMovie = response.data.find(m => m.title.toLowerCase() === formattedMovieName);
                    if (foundMovie) {
                        setMovie({
                            title: foundMovie.title,
                            desc: foundMovie.description || "No description available.",
                            img:  defaultPoster  // Use default poster if none is provided
                        });
                    } else {
                        loadStaticData();
                    }
                } else {
                    message.error(response.message);
                    loadStaticData();
                }
            } catch (error) {
                message.error(`An error occurred while fetching movies: ${error.message}`);
                loadStaticData();
            } finally {
                setIsLoading(false);
            }
        }

        const loadStaticData = () => {
            const staticMovies = {
                'dune': { title: 'Dune', desc: 'An epic science fiction journey to a distant planet filled with stunning visuals and gripping storytelling.', img: dune },
                'quiet': { title: 'A Quiet Place Part II', desc: 'A tense horror thriller where silence is survival, as a family must navigate a post-apocalyptic world inhabited by deadly creatures with hypersensitive hearing.', img: quiet },
                'dog': { title: 'The Power of the Dog', desc: 'A gripping psychological drama set in 1920s Montana, featuring outstanding performances and captivating storytelling.', img: dog },
                'squidgame': { title: 'Squid Game', desc: 'A thrilling South Korean survival series where contestants compete in deadly games for a chance to win a huge cash prize.', img: squid }
            };
            setMovie(staticMovies[movieName]);
        };

        fetchData();
    }, [movieName]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!movie) {
        return <div>No movie data available.</div>;
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-6">{movie.title}</h1>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2">
                    <img src={movie.img} alt={movie.title} className="rounded-lg shadow-md" />
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <p className="text-lg">{movie.desc}</p>
                    <Link to="/book-now" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors" style={{backgroundColor: '#3d405b'}}>Book Now</Link>  
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
