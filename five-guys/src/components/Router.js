// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import KitchenDisplay from '../pages/Kitchen/KitchenDisplay';
import LoginPage from '../pages/Login';
import Dashboard from '../pages/Admin/Dashboard/Dashboard';
import BreakfastPage from '../pages/Waiter/Breakfast/BreakfastPage';
import LunchPage from '../pages/Waiter/LunchPage/LunchPage';
import StatusPage from '../pages/Waiter/StatusPage/StatusPage';
import KitchenCompleted from '../pages/Kitchen/KitchenCompleted';

const Router = () => {

const BrowserRoutes = () => {
  const[token, setToken] = useState();
  const savedToken = (userToken) => setToken(userToken);
  
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage savedToken={savedToken} />} />
                {/* <Route path="/kitchen" element={<KitchenPage />} />*/}
                <Route path="/dashboard" element={<Dashboard />} /> 
                <Route path='/breakfastmenu' element={<BreakfastPage token={token} />} />
                <Route path='/lunchmenu' element={<LunchPage token={token} />} />
                <Route path='/status' element={<StatusPage />} />
                <Route path='/kitchendisplay' element={<KitchenDisplay token={token} />} />
                <Route path='/completedorders' element={<KitchenCompleted token={token} />} />

            </Routes>
        </BrowserRouter>
    )
}


  return (
    <BrowserRoutes />
  )
}

export default Router;
