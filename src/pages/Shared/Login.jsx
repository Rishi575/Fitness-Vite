import React, { useState } from 'react'
import '@/assets/css/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import * as Components from './logcom';

import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';


const Login = () => {
    const adminCredentials = {
        email: 'admin@gmail.com',
        password: 'admin'
    };

    const [signIn, toggle] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleSignIn = () => {
        if (email === adminCredentials.email && password === adminCredentials.password) {
            toast.success('Successfully signed in as admin!',{duration:5000});
            navigate('/admin/dashboard');
        } else if (email === 'user@gmail.com' && password === 'user') {
            toast.success('Successfully signed in as user!',{duration:5000}); // Success toast
            navigate('/');
        } else {
            toast.error("This didn't work. Invalid email or password.",{duration : 60000}); // Failure toast
        }
    };
    

    return (
        <>
            <div className="body">
                <Components.Container className='bg-background'>
                    <Components.SignUpContainer signinIn={signIn}>
                        <Components.Form className='bg-background'>
                            <Components.Title>Create Account</Components.Title>
                            <Components.Input type='text' placeholder='Name' className='text-black'/>
                            <Components.Input type='email' placeholder='Email' className='text-black'/>
                            <Components.Input type='password' placeholder='Password' className='text-black'/>
                            <Link to="/">
                                <Components.Button className='primarycolor '>Sign Up</Components.Button>
                            </Link>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input type='email' placeholder='Email' className='text-black' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <Components.Input type='password' placeholder='Password' className='text-black' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                            {/* <Link to="/Home"> */}
                                <Components.Button className='primarycolor'  onClick={handleSignIn}>Sigin In</Components.Button>
                            {/* </Link> */}
                        </Components.Form>
                    </Components.SignInContainer>

                    <Components.OverlayContainer signinIn={signIn}>
                        <Components.Overlay signinIn={signIn} className='primarycolor'>

                            <Components.LeftOverlayPanel signinIn={signIn} >
                                <Components.Title className='text-background'>Welcome Back!</Components.Title>
                                <Components.Paragraph className='text-background'>
                                    To keep connected with us please login with your personal info
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(true)} className='border-2 border-background text-background'>
                                    Sign In
                                </Components.GhostButton>
                            </Components.LeftOverlayPanel>

                            <Components.RightOverlayPanel signinIn={signIn}>
                                <Components.Title className='text-background'>Hello, Friend!</Components.Title>
                                <Components.Paragraph className='text-background'>
                                    Enter Your personal details and start journey with us
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)} className='border-2 border-background text-background'>
                                    Sigin Up
                                </Components.GhostButton>
                            </Components.RightOverlayPanel>

                        </Components.Overlay>
                    </Components.OverlayContainer>

                </Components.Container>
            <Toaster  
            position="top-right"
            reverseOrder={false}
            />
            </div>
        </>
    )
}

export default Login
