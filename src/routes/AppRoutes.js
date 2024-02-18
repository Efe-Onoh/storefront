import React from "react";
import { Routes, Route } from "react-router-dom";
import customTheme from "../theme/AppTheme";
import AppLayout from "../pages/AppLayout";
import { ThemeProvider } from "@emotion/react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import DeviceManagement from "../pages/DeviceManagement/DeviceManagement";
import LandingPage from "../pages/LandingPage/LandingPage";

function AppRoutes(){
    return(
        <ThemeProvider theme={customTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                    <Route index element={<LandingPage/>}/>
                    <Route path="devices" element={<DeviceManagement/>}/>
                </Route>
            </Routes>
            </LocalizationProvider>
        </ThemeProvider>
    )
}

export default AppRoutes