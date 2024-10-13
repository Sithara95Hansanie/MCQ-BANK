import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import BlogList from './pages/BlogList';
import Blog from './pages/Blogs';

import router from './routes'

import DashboardLayout from './layout/Dashboard';

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

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                    <RouterProvider router={router} />
            </ThemeProvider>
        </Provider>
        // <ThemeProvider theme={theme}>
        //     <Provider store={store}>
        //         <Router>
        //             <DashboardLayout/>
        //                 <Routes>
        //                     <Route path="/" element={<Dashboard />} />
        //                     <Route path="/add-blog" element={<Blog />} />   
        //                     <Route path="/blog-list" element={<BlogList/>}  />                           
        //                 </Routes>
        //         </Router>
        //     </Provider>
        // </ThemeProvider>
    );
};

export default App;
