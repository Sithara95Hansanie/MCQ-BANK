import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import { styled, useTheme } from '@mui/material/styles';

import Header from './components/Header';
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBlogPage from './pages/AddBlogForm';
import Dashboard from './pages/Dashboard';
import Drawer from './components/Drawer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import PersistentDrawerLeft from './pages/Layout';
import SideDrawer from './components/Drawer';
import BlogList from './pages/BlogList';
import Blog from './pages/Blogs';
const drawerWidth = 240;

// Create a custom theme
const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#006c7f',
        },
        secondary: {
            main: '#ea914e',
        },
        mainButton: {
            main: '#424242'
        }
    },
    typography: {
        fontFamily: [
            'Roboto', // Default font
            'Arial', // Additional font
        ].join(','),
        fontSize: 16, // Base font size
        h1: {
            fontSize: '2rem', // Custom heading font size
        },
        // Add more typography customizations as needed
    },
});

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const App = () => {
    const [currentItem, setCurrentItem] = useState(null);
    const [open, setOpen] = React.useState(true);

    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Router>
                    <Header/>
                    {/* <PersistentDrawerLeft/> */}
                        {/* <SideDrawer /> */}
                        {/* <Main> */}
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/add-blog" element={<Blog />} />   
                                <Route path="/blog-list" element={<BlogList/>}  />                           
                            </Routes>
                        {/* </Main> */}
                </Router>
                {/* <ItemForm currentItem={currentItem} setCurrentItem={setCurrentItem} />*/}
                {/* <ItemList />  */}
            </Provider>
        </ThemeProvider>


    );
};

export default App;
