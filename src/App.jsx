
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import UserLayout from './layout/UserLayout'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Shared/NotFound'
import HomeLayout from './layout/HomeLayout'
import AdminUser from './pages/Admin/AdminUser'
import UserDashboard from './pages/User/UserDashboard'
import UserWorkout from './pages/User/UserWorkout'
import UserSubscription from './pages/User/UserSubscription'
import UserSession from './pages/User/UserSession'
import Navbar from './components/Shared/Navbar'
import AdminTrainers from './pages/Admin/AdminTrainers'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='/dashboard' element={<UserDashboard/>} />
                        <Route path='/workout' element={<UserWorkout/>} />
                        <Route path='/payment' element={<UserSubscription/>} />
                        <Route path='/session' element={<UserSession/>} />
                    </Route>
                    
                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/users' element={<AdminUser/>} />
                        <Route path='/admin/trainers' element={<AdminTrainers/>} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App