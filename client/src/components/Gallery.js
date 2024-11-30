import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import dune from '../pages/images/dune.jpg';
import quiet from '../pages/images/quiet.jpg';
import dog from '../pages/images/dog.jpg';
import squid from '../pages/images/squidgame.jpg';
import defaultPoster from '../pages/images/default-poster.jpg';  
import { GetAllPublishMovieShows } from '../apicalls/movieshows';
import { message } from 'antd';

function Gallery() {
    const navigate = useNavigate();
    const [publishedMovies, setPublishedMovies] = useState([]);
    const [showPublished, setShowPublished] = useState(false); // State to toggle published movies visibility

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await GetAllPublishMovieShows();
                if (response.success) {
                    setPublishedMovies(response.data);
                } else {
                    message.error(response.message);
                }
            } catch (error) {
                message.error('An error occurred while fetching movies: ' + error.message);
            }
        }
        fetchData();
    }, []);

    const handleNavigate = movieName => {
        navigate(`/movies/${movieName}`);
    };

    const togglePublishedMovies = () => {
        setShowPublished(!showPublished);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8">
            <div className="cursor-default rounded-xl bg-white p-6 shadow-lg hover:shadow-xl text-center col-span-full">
                <h1 className="text-4xl  font-semibold text-gray-800 mb-0">What's On</h1>  
            </div>
            {/* Static movie cards */}
            <div className="cursor-pointer rounded-xl bg-white p-6 shadow-lg hover:shadow-xl text-center" onClick={() => handleNavigate('dune')}>
                <img src={dune} alt="Dune" className="rounded-xl mx-auto w-full"/>
                <h2 className="text-slate-700 mt-4 text-lg font-semibold">Dune</h2>
            </div>
            <div className="cursor-pointer rounded-xl bg-white p-6 shadow-lg hover:shadow-xl text-center" onClick={() => handleNavigate('quiet')}>
                <img src={quiet} alt="A Quiet Place Part II" className="rounded-xl mx-auto w-full"/>
                <h2 className="text-slate-700 mt-4 text-lg font-semibold">A Quiet Place Part II</h2>
            </div>
            <div className="cursor-pointer rounded-xl bg-white p-6 shadow-lg hover:shadow-xl text-center" onClick={() => handleNavigate('dog')}>
                <img src={dog} alt="The Power of the Dog" className="rounded-xl mx-auto w/full"/>
                <h2 className="text-slate-700 mt-4 text-lg font-semibold">The Power of the Dog</h2>
            </div>
            <div className="cursor-pointer rounded-xl bg-white p-6 shadow-lg hover:shadow-xl text-center" onClick={() => handleNavigate('squidgame')}>
                <img src={squid} alt="Squid Game" className="rounded-xl mx-auto w/full"/>
                <h2 className="text-slate-700 mt-4 text-lg font-semibold">Squid Game</h2>
            </div>

            {/* Button to show published movies */}
            {!showPublished && publishedMovies.length > 0 && (
                <div className="col-span-full text-center mt-4">
                    <button className="py-2 px-4 rounded" style={{ backgroundColor: '#3d405b', color: 'white' }} onClick={togglePublishedMovies}>
                        Show All
                    </button>
                </div>
            )}

            {/* Published movies fetched dynamically */}
            {showPublished && publishedMovies.map((movie) => (
                <div key={movie._id} className="cursor-pointer rounded-xl bg-white p-6 shadow-lg hover:shadow-xl text-center" onClick={() => handleNavigate(movie.title)}>
                    <img src={defaultPoster || movie.poster} alt={movie.title} className="rounded-xl mx-auto w/full"/>
                    <h2 className="text-slate-700 mt-4 text-lg font-semibold">{movie.title}</h2>
                </div>
            ))}

            {/* Button to hide published movies, shown only when they are visible */}
            {showPublished && (
                <div className="col-span-full text-center mt-4">
                    <button className="py-2 px-4 rounded" style={{ backgroundColor: '#3d405b', color: 'white' }} onClick={togglePublishedMovies}>
                        Show Less
                    </button>
                </div>
            )}
        </div>
    );
}

export default Gallery;
