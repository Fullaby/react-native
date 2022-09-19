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
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{width: '400px'}}>
  <div className="carousel-inner">
    {movieLoading && <h1>Loading...</h1>}
    {!movieLoading && movie.results.map((el,idx)=>
    <div className="carousel-item active" key={idx}>
      <img src={`https://image.tmdb.org/t/p/w500${el.backdrop_path}`} className="d-block w-100" alt="..."/>
    </div>
    )}
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}