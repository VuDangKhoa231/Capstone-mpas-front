import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Main from './Component/Main';
import LoginComponent from './Component/Login/LoginComponent';
import Dashboard from './Component/Dashboard/Dashboard';
import ListOfPLO from './Component/PLO/ParkinglotOwner/ListOfPLO';
import DetailPLO from './Component/PLO/ParkinglotOwner/DetailPLO';
import Browse from './Component/PLO/Browse/Browse';
import Withdrawal from './Component/PLO/Withdrawal/Withdrawal';
import ListOFCustomer from './Component/Customer/ListOFCustomer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


function App() {
  const user = useSelector((state) => state.auth)
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.login.accessToken) {
      navigate('/login')
    }
  }, [])


  return (
    <Routes>
      <Route path="/login" element={<LoginComponent />} />
      <Route path='/' element={<Main />}>
        <Route index element={<Dashboard />} />
        <Route path="/PLO" element={<ListOfPLO />} />
        <Route path="/PLO/:id" element={<DetailPLO />} />
        <Route path="/Browse" element={<Browse />} />
        <Route path="/Browse/:id" element={<Browse />} />
        <Route path="/Withdrawal" element={<Withdrawal />} />
        <Route path="/Customer" element={<ListOFCustomer />} />
      </Route>
    </Routes>
  )
}


export default App;
