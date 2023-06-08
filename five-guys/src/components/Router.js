// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login';
import KitchenPage from '../pages/KitchenDisplay';
import Dashboard from '../pages/Dashboard/Dashboard';
import BreakfastPage from '../pages/Breakfast/BreakfastPage';
import LunchPage from '../pages/LunchPage/LunchPage';
import StatusPage from '../pages/StatusPage/StatusPage';

const Router = () => {

const BrowserRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                {/* <Route path="/kitchen" element={<KitchenPage />} />*/}
                <Route path="/dashboard" element={<Dashboard />} /> 
                <Route path='/breakfastmenu' element={<BreakfastPage />} />
                <Route path='/lunchmenu' element={<LunchPage />} />
                <Route path='/status' element={<StatusPage />} />
            </Routes>
        </BrowserRouter>
    )
}


  return (
    <BrowserRoutes />
  )
}

export default Router;
