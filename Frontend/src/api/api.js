import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Create an Axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Define API endpoints
export const fetchItems = () => api.get('/items');
export const createItem = (item) => api.post('/items', item);
export const updateItem = (id, item) => api.put(`/items/${id}`, item);
export const deleteItem = (id) => api.delete(`/items/${id}`);

export const fetchBlog = () => api.get('/blogs');
export const createBlog = (blog) => api.post('/blogs', blog);
export const updateBlog = (id, blog) => api.put(`/blogs/${id}`, blog);
export const deleteBlog = (id) => api.delete(`/blogs/${id}`);

export const createUser = (user) => api.post('/auth/register',user)
