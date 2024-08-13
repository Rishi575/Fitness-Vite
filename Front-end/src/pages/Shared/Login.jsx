import React, { useState } from 'react';
import '@/assets/css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import * as Components from './logcom';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const adminCredentials = {
        email: 'admin@gmail.com',
        password: 'admin'
    };

    const [signIn, toggle] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupName, setSignupName] = useState('');
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();
        if (email === adminCredentials.email && password === adminCredentials.password) {
            toast.success('Successfully signed in as admin!', { duration: 5000 });
            setTimeout(() => {
                navigate('/admin/dashboard');
            }, 1000);
        } else if (email === 'user@gmail.com' && password === 'user') {
            toast.success('Successfully signed in as user!', { duration: 5000 });
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } else {
            toast.error("This didn't work. Invalid email or password.", { duration: 3000 });
        }
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        if (!signupName || !signupEmail || !signupPassword) {
            toast.error('All fields are required!', { duration: 3000 });
            return;
        }

        // Here you would handle the registration logic
        toast.success('Registration successful!', { duration: 5000 });
        setSignupName('');
        setSignupEmail('');
        setSignupPassword('');
    };

    return (
        <>
            <div className="body">
                <Components.Container className='bg-background'>
                    <Components.SignUpContainer signinIn={signIn}>
                        <Components.Form className='bg-background'>
                            <Components.Title>Create Account</Components.Title>
                            <Components.Input
                                type='text'
                                placeholder='Name'
                                className='text-black'
                                value={signupName}
                                onChange={(e) => setSignupName(e.target.value)}
                            />
                            <Components.Input
                                type='email'
                                placeholder='Email'
                                className='text-black'
                                value={signupEmail}
                                onChange={(e) => setSignupEmail(e.target.value)}
                            />
                            <Components.Input
                                type='password'
                                placeholder='Password'
                                className='text-black'
                                value={signupPassword}
                                onChange={(e) => setSignupPassword(e.target.value)}
                            />
                            <Components.Button className='primarycolor' onClick={handleSignUp}>
                                Sign Up
                            </Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input
                                type='email'
                                placeholder='Email'
                                className='text-black'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Components.Input
                                type='password'
                                placeholder='Password'
                                className='text-black'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                            <Components.Button className='primarycolor' onClick={handleSignIn}>
                                Sign In
                            </Components.Button>
                        </Components.Form>
                    </Components.SignInContainer>

                    <Components.OverlayContainer signinIn={signIn}>
                        <Components.Overlay signinIn={signIn} className='primarycolor'>
                            <Components.LeftOverlayPanel signinIn={signIn}>
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
                                    Enter your personal details and start your journey with us
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)} className='border-2 border-background text-background'>
                                    Sign Up
                                </Components.GhostButton>
                            </Components.RightOverlayPanel>
                        </Components.Overlay>
                    </Components.OverlayContainer>
                </Components.Container>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                    className='mt-20'
                />
            </div>
        </>
    );
};

export default Login;
