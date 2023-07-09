import { ADD_LIST, NEXT_MOVIE, PRE_MOVIE, REMOVE_LIST } from "../actions/action";
import { movies } from "../movies";


const initialState = {
    movies: movies,
    favMovies: [],
    sira: 0,
}

const reducer = (state = initialState, action)=>{
    switch(action.type) {

        case ADD_LIST:
            const movie=  state.movies[state.sira]
            return {
                ...state,
                sira:state.sira+1,
                favMovies: [...state.favMovies, movie]
            };
        
        case REMOVE_LIST:
            return {
                ...state,
                favMovies: state.favMovies.filter((item)=> action.payload !== item.id),
            };

        case NEXT_MOVIE:
            return {
                ...state,
                sira: state.sira+1,
            };

        case PRE_MOVIE:
            return {
                ...state,
                sira: state.sira-1,
            };
        
        default:
        return state
    }
}

export default reducer;