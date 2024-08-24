import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import AddBlogPage from './AddBlogForm';
import BlogList from './BlogList';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Blog = () => {
    return (
        <Box sx={{ p: 2, flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                    <Item>
                        <AddBlogPage/>
                    </Item>
                </Grid>
                <Grid xs={12} md={6}>
                    <BlogList/>
                </Grid>
                <Grid xs={6} md={4}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid xs={6} md={8}>
                    <Item>xs=6 md=8</Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Blog;
