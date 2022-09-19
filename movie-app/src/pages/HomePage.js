import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeadBar from "../components/HeadBar";
import ImageCarousel from "../components/ImageCarousel";
import { fetchMovie ,fetchMovieGenre, fetchMovieSuccess } from "../store/actions";

export default function HomePage(){
    const dispatch= useDispatch()
    const {movieGenre}= useSelector((state)=>state)
    const {movie}= useSelector((state)=>state)
    const [loading, setLoading]= useState(true)
    const [movieLoading, setMovieLoading]= useState(true)
    const [genreId,setGenreId]= useState([28,12])

   
    

   

    useEffect(()=>{
        dispatch(fetchMovieGenre())
        .finally(()=>{
            setLoading(false)
        })
    },[])

    useEffect(()=>{
        let moviesData= []
        genreId.forEach((el)=>{
          
            dispatch(fetchMovie(el))
            
            .then(({data})=>{
                dispatch(fetchMovieSuccess(data))
            })

            .finally(()=>{
                setMovieLoading(false)
            })
        })
    },[])
    const byGenre= (el,mov)=>{
        if(el.id){

        }
    }
    return(
        <div>
            <HeadBar/>
            <div>
            <div>
            <h1>My List</h1>
            {movieLoading && <h1>Loading...</h1>}
            </div>
            {!movieLoading && movie.results.map((mov,idx)=>
            <div key={idx} className='container'>
                <div className="d-flex">
                    <div className="row">
                    <div className="">
                <div className="" style={{width:'500px', height: '200px',marginBottom: '100px'}}>
                <div className="card bg-dark text-white bg-image hover-overlay ripple shadow-1-strong rounded">
  <img src={`https://image.tmdb.org/t/p/w500${mov.backdrop_path}`} className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <span className="card-title">{mov.original_title}</span><br></br>
    <span className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</span>
    <span className="card-text">Last updated 3 mins ago</span>
  </div>
</div>
</div>
            </div>
            </div>
            </div>
            </div>
       
            )}
            {loading && <h1>Loading...</h1>}
            {!loading &&  movieGenre.genres.map((el,idx)=>
            <div key={idx}>
           
            <h1>{el.name}</h1>
            <div>
            </div>
           
            </div>
            )}
      
            </div>
            
        </div>
    )
}