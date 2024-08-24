import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Title } from '@mui/icons-material';
import { addBlog, updateBlogAction } from '../actions/blogAction';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const AddBlogPage = ({ currentBlog, setCurrentBlog }) => {
    const [title, setTitle] = useState(currentBlog ? currentBlog.title : '');
    const [description, setDescription] = useState(currentBlog ? currentBlog.description : '');
    const [author, setAuthor] = useState(setCurrentBlog ? setCurrentBlog.author : '');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBlog = { title, description, author };

        if (currentBlog) {
            dispatch(updateBlogAction(currentBlog._id, newBlog));

            setCurrentBlog(null);
        } else {
            dispatch(addBlog(newBlog));
        }

        setTitle('');
        setDescription('');
        setAuthor('');
    }


    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Typography variant="subtitle1"  display="block" gutterBottom>
                Create new blog
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} >
                    <Grid item md={12}>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            label="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}

                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            label="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}

                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            label="Author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}

                        />
                    </Grid>
                    <Grid item md={12}>
                        <Button variant="contained" sx={{
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'primary.dark',
                            },
                        }} type='submit'>
                            {currentBlog ? 'Update Item' : 'Add Item'}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default AddBlogPage;
