import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs, deleteBlogAction } from '../actions/blogAction';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



const BlogList = () => {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blog.blogs);
    const [shouldRefresh, setShouldRefresh] = useState(true);

    useEffect(() => {
        if (shouldRefresh) {
            dispatch(getBlogs());

            setShouldRefresh(false);
        }

    }, [shouldRefresh, dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteBlogAction(id)).then(() => {
            setShouldRefresh(true);
        });
    };

    return (
        <Grid>
            <Typography variant="subtitle1" display="block" gutterBottom>
                Preview blogs
            </Typography>
            {blogs.map(blog => (
                <Card key={blog._id} sx={{ mt: 2, mb: 2 }} >
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {blog.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {blog.description}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {blog.author}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button color="inherit" size="small">Edit</Button>
                        <Button onClick={() => handleDelete(blog._id)} >Delete</Button>
                    </CardActions>
                </Card>
            ))}
        </Grid>
    );
};

export default BlogList;
