import { fetchMovie , fetchMovieSuccess } from "../store/actions";
import { Carousel } from 'react-responsive-carousel'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

  
export default function ImageCarousel(){
    const dispatch= useDispatch()
    const {movie}= useSelector((state)=>state)
    const [movieLoading, setMovieLoading]= useState(true)

 useEffect(()=>{
            dispatch(fetchMovie())
            .then(({data})=>{
                dispatch(fetchMovieSuccess(data))
            })
            .finally(()=>{
                setMovieLoading(false)
            })
    },[])
    return(
        <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
        <div className="carousel-inner relative overflow-hidden" style={{width: '500px'}}>
            {movieLoading&& <h1>Loading...</h1>}
            {!movieLoading && movie.results.map((el,idx)=>
          <div className="carousel-item active relative float-left w-full" key={idx}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${el.backdrop_path}`}
              className="block w-full"
              alt="..."
            />
          </div>
          )}
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}