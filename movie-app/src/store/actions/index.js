import { FETCH_GENRE, FETCH_MOVIE } from "./actiontypes"
import axios from 'axios'

export const fetchMovieSuccess= (payload)=>{
return{
    type: FETCH_MOVIE,
    payload
}
}

export const fetchMovieGenreSuccess= (payload)=>{
    return{
        type: FETCH_GENRE,
        payload
    }
}

export const fetchMovie= (id=[28,12])=> async (dispatch)=>{
   let url= `https://api.themoviedb.org/3/discover/movie?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free`
      return await axios(`${url}`,{
         method: 'get'
      })
      .then(({data})=>{
         dispatch(fetchMovieSuccess(data))
      })
      .catch((error)=>{
         console.log(error);
      })

 
}

export const fetchMovieGenre= ()=> async (dispatch)=>{
    return await axios('https://api.themoviedb.org/3/genre/movie/list?api_key=9be5962f75cabd26c04eb4443674e0d2&language=en-US',{
        method: 'get'
     })
    
     .then(({data})=>{
        dispatch(fetchMovieGenreSuccess(data))
     })
     .catch((error)=>{
        console.log(error);
     })
}