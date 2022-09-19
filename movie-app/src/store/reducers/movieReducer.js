import { FETCH_GENRE, FETCH_MOVIE } from "../actions/actiontypes";


let initialState= {
    movie:[],
    movieGenre: []
}

export default function movieReducer(state= initialState, action){
    switch(action.type){
        case FETCH_MOVIE:
            return{
                ...state,
                movie: action.payload
            }
        case FETCH_GENRE:
            return{
                ...state,
                movieGenre: action.payload
            }
        default:
            return state
    }
}

