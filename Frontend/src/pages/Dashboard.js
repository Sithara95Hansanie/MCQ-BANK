import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Dashboard = () => {
    return (
        <Box sx={{ p: 2, flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={6} md={6}>
                    <Item>
                        <Button color="inherit" component={Link} to='/add-blog'>
                            Add Blog
                        </Button>
                    </Item>
                </Grid>
                <Grid xs={6} md={4}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid xs={3}>
                    <Item>Create Quiz</Item>
                </Grid>
                <Grid xs={3}>
                    <Item>Check Result</Item>
                </Grid>
                <Grid xs={3}>
                    <Item>User Profile</Item>
                </Grid>
                <Grid xs={3}>
                    <Item>Add Users</Item>
                </Grid>
                <Grid xs={6} md={8}>
                    <Item>xs=6 md=8</Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
