// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login';
import PinPage from '../pages/Pin';
import NewOrderPage from '../pages/NewOrder';
import KitchenPage from '../pages/KitchenDisplay';
import DashboardPage from '../pages/Dashboard';

const Router = () => {

const BrowserRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/pin" element={<PinPage />} />
                {/* <Route path="/neworder" element={<NewOrderPage />} />
                <Route path="/kitchen" element={<KitchenPage />} />*/}
                <Route path="/dashboard" element={<DashboardPage />} /> 
            </Routes>
        </BrowserRouter>
    )
}


  return (
    <BrowserRoutes />
  )
}

export default Router;
