import React, {useState,useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './components/Shared/Loading';
import UserLayout from './layout/UserLayout';
import AdminLayout from './layout/AdminLayout';
import HomeLayout from './layout/HomeLayout';
import NotFound from './pages/Shared/NotFound';

import './assets/css/Shadow.css'
import RazorPayment from './components/Shared/Payment/PaypalPayment';

// Lazy load pages
const Home = lazy(() => import('./pages/Shared/Home'));
const Learn = lazy(() => import('./pages/Shared/Learn'));
const Login = lazy(() => import('./pages/Shared/Login'));
const AdminDashboard = lazy(() => import('./pages/Admin/AdminDashboard'));
const AdminUser = lazy(() => import('./pages/Admin/AdminUser'));
const AdminTrainers = lazy(() => import('./pages/Admin/AdminTrainers'));
const AdminTask = lazy(() => import('./pages/Admin/AdminTask'));
const UserDashboard = lazy(() => import('./pages/User/UserDashboard'));
const UserWorkout = lazy(() => import('./pages/User/UserWorkout'));
const UserSubscription = lazy(() => import('./pages/User/UserSubscription'));
const UserSettings = lazy(() => import('./pages/User/UserSettings'));

const App = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);
  
    if (loading) {
      return <Loading />;
    }

  return (
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<Learn />} />
          </Route>


          <Route element={<UserLayout />}>
            <Route path='/dashboard' element={<UserDashboard />} />
            <Route path='/workout' element={<UserWorkout />} />
            <Route path='/subscription' element={<UserSubscription />} />
            <Route path='/settings' element={<UserSettings />} />
            <Route path="/payment" element={<RazorPayment />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route path='/admin/dashboard' element={<AdminDashboard />} />
            <Route path='/admin/users' element={<AdminUser />} />
            <Route path='/admin/trainers' element={<AdminTrainers />} />
            <Route path='/admin/session' element={<AdminTask />} />
          </Route>


          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
