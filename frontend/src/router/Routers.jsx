import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../pages/Home';
import Tours from './../pages/Tours';
import About from './../pages/About.jsx'
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import ThankYou from '../pages/ThankYou';
import HelpCenter from '../pages/HelpCenter';
import Policy from '../pages/Policy';
import AdminDashboard from '../pages/AdminDashboard.jsx';
import ProtectedRoute from '../components/ProtectedRoute.js';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/tours/:id' element={<TourDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/tours/search' element={<SearchResultList />} />
        <Route path='/help' element={<HelpCenter />} />
        <Route path='/policy' element={<Policy />} />
        <Route path="/admin/dashboard" element={
                    <ProtectedRoute>
                        <AdminDashboard />
                    </ProtectedRoute>
                } />
    </Routes>
  )
}
export default Routers