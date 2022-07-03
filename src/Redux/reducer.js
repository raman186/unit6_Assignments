
import { GET_ALL_TODOS, LOADING, SUCCESS, REJECT } from "./action.js";

export const todoReducer=(store ={todos :[], isLoading:false, isError:false}, action)=>{
    switch(action.type){
        case GET_ALL_TODOS:
            return {
                todos : [...action.payload]
            }
        case LOADING:
            return {
                ...store,
                isLoading:true,
                isError:false,
                todos:[]
            };
        case SUCCESS:
            return {
                ...store,
                isLoading:false,
                isError:false,
                todos : [...action.payload]
            }
        case REJECT:
            return {
                isLoading:false,
                isError:true,
                todos : []
            }
        
        default :
            return store;
    }
}

