const initialState = {
    users:[],
    loading:null,
    token:null,
    error:null
};

const userReducer = (state = initialState, action ) => {
    switch (action.type) {
        case 'USER_REGISTER_REQUEST':
            return {...state, loading : true }
        case 'USER_REGISTER_SUCCESS':
            return { loading : false , user , token :action.payload.token}
        case 'USER_REGISTER_FAIL':
            return { loading : false, error :action.payload }
        // case 'ADD_USER':
        //     return {
        //         ...state,
        //         users:[...state.users,action.payload]
        //     };
        default:
            return state;
    }
}

export default userReducer;