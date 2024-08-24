import {fetchBlog, createBlog ,updateBlog, deleteBlog} from '../api/api';


export const getBlogs = () => async (dispatch) => {
    try {
        const res = await fetchBlog();
        dispatch({type:'GET_BLOGS', payload:res.data});
    } catch (err) {
        console.log(err);

    }
}

export const addBlog = (blog) => async(dispatch)=>{
    try{
        const res = await createBlog(blog);
        dispatch({type:'ADD_BLOG', payload : res.data });
    }
    catch (err){
        console.log(err);
    }
}

export const updateBlogAction = (id,blog)=>async(dispatch)=>{
    try{
        const res = await updateBlog(id,blog);
        dispatch({type:'UPDATE_BLOG', payload : res.data });
    }
    catch (err){
        console.log(err);
    }
}

export const deleteBlogAction = (id) => async (dispatch) => {
    try {
        await deleteBlog(id);
        dispatch({type:'DELETE_BLOG', payload : id });
    } catch (err){
        console.log(err);
    }
}