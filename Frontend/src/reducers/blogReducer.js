const initialState = {
    blogs:[],
}

const blogReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET_BLOGS':
            return {
                ...state,
                blogs:action.payload,
            };
        case 'ADD_BLOG':
            return {
                ...state,
                blogs:[...state.blogs, action.payload],
            };
        case 'UPDATE_BLOG':
            return {
                ...state,
                blogs:state.blogs.map(blog=>
                    blog._id === action.payload._id ? action.payload : blog
                ),
            };
        case 'DELETE_ITEM':
            return {
                ...state,
                blogs:state.blogs.filter(blog=>blog._id !== action.payload),

            };
        default:
            return state;

    }
}

export default blogReducer;