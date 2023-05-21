import React from 'react';
import {Typography, Box} from "@mui/material";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './Login';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center" >
            {"Copyright "}
            fsoftwareengineer, {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
        <Box mt={5}>
            <Copyright />
        </Box>
    </div>
  )
}

export default AppRouter;