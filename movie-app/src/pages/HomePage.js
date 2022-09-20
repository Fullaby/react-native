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
    const[lists,setLists]= useState([])


    const preferList= {
        listing: []
    }
   
    console.log(lists);

    let fetchLists= ()=>{
      let data=  JSON.parse(localStorage.getItem('listed'))
      setLists(data)
    } 
    

    useEffect(()=>{
        dispatch(fetchMovieGenre())
        .finally(()=>{
            setLoading(false)
        })
    },[])

    useEffect(()=>{
        fetchLists()
    },[])

    useEffect(()=>{
            dispatch(fetchMovie())
            
            .then(({data})=>{
                dispatch(fetchMovieSuccess(data))
            })

            .finally(()=>{
                setMovieLoading(false)
            })
    },[])

 
    let listSet= (images)=>{
        preferList.listing.push(images)
        localStorage.setItem('listed', JSON.stringify(preferList))
       
    }

    let deleteMyList=(id)=>{
        let datas=JSON.parse(localStorage.getItem('listed'))
       let newData= datas.listing.filter((el)=> el.id !== id )
       localStorage.setItem('listed', JSON.stringify(newData))
       fetchLists()
    }

    return(
        <div className="bg-gray-100">
            <HeadBar/>
            <div>
            <div>
            <h1 style={{fontSize: '50pt'}}>My List</h1>
            </div>
          <div className="">
            <div className="w-full">
              <div className="">
                <div
                  id="scrollContainer"
                  className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-10"
                >
                
                {lists == null || lists.length== 0 ? <h1 style={{fontSize: '30pt'}}>Nothing here! Scroll to discover more</h1> : lists.listing.map((mov,idx)=>
                  <div key={idx}
                    className="flex-none mr-8 rounded-lg hover:scale-125 hover:bg-red-200 transition-all duration-300 pb-16 pt-16 pl-10 pr-10"
                  >
                    <button  className="space-y-4" onClick={()=> deleteMyList(mov.id)}>
                      <div className="aspect-w-16 aspect-h-6">
                        <img
                          className="object-cover shadow-md hover:shadow-xl rounded-lg"
                          src={`https://image.tmdb.org/t/p/w200/${mov}`}
                          alt=""
                        />
                      </div>
                    </button>
                  </div>
                    )}
                </div>
              </div>
            </div>
          </div>
         
         
            {loading && <h1>Loading...</h1>}
            {!loading &&  movieGenre.genres.map((el,idx)=>
            <div key={idx}>
            <h1 className="pl-10" style={{fontSize: '40pt'}}>{el.name}</h1>
            <div>
            <div className="">
            <div className="w-full">
              <div className="">
                <div
                  id="scrollContainer"
                  className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-10"
                >

                {!movieLoading && movie.results.map((mov,idx)=>
                {return mov.genre_ids.map((gen)=>{
                    {return gen == el.id && (
                        <div key={idx}
                    className="flex-none mr-8 rounded-lg hover:scale-125 transition-all duration-300 pb-16 pt-16 pl-10"
                  >
                    <button onClick={()=>listSet(mov.poster_path)}  className="space-y-4 ">
                      <div className="aspect-w-16 aspect-h-6">
                        <img
                          className="object-cover shadow-md hover:shadow-xl rounded-lg"
                          src={`https://image.tmdb.org/t/p/w200/${mov.poster_path}`}
                          alt=""
                        />
                      </div>
                    </button>
                  </div>
                    )}
                })}
                    )}
                </div>
              </div>
            </div>
          </div>
            </div>
            </div>
            )}
      
            </div>
            
        </div>
    )
}