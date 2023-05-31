import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login';
import PinPage from './pages/Pin';
import NewOrderPage from './pages/NewOrder';
import KitchenPage from './pages/KitchenDisplay';
import DashboardPage from './pages/Dashboard';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        {/* <Route path="/login" component={LoginPage} /> */}
        <Route path="/pin" element={<PinPage />} />
        <Route path="/newOrder" element={<NewOrderPage />} />
        <Route path="/kitchenDisplay" element={<KitchenPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App; 