
export const ADD_TODO ="ADD_TODO";
export const TOGGLE_TODO ="TOGGLE_TODO";
export const DELETE_TODO ="DELETE_TODO";
export const GET_ALL_TODOS = 'GET_ALL_TODOS';
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCESS';
export const REJECT = 'REJECT';

export const getAllTodos=(payload)=>{ 
    return {
        type:GET_ALL_TODOS,
        payload
    }
}
export const loading=()=>{ 
    return {
        type:LOADING
    }
}
export const sucess=(payload)=>{ 
    return {
        type:SUCCESS,
        payload
    }
}
export const reject=(payload)=>{ 
    return {
        type:REJECT,
        payload
    }
}
