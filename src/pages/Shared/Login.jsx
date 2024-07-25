import React, { useState } from 'react'
import '@/assets/css/Login.css'
import { Link } from 'react-router-dom';
import * as Components from './logcom';

const Login = () => {
    const [signIn, toggle] = React.useState(true);
        return (
        <>
        <div className="body">
            <Components.Container className='bg-background'>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form className='bg-background'>
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input type='text' placeholder='Name' />
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Link to="/Home">
                        <Components.Button className='bg-primary '>Sign Up</Components.Button>
                      </Link>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input type='email' placeholder='Email' />
                       <Components.Input type='password' placeholder='Password' />
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Link to="/Home">
                        <Components.Button className='bg-primary'>Sigin In</Components.Button>
                      </Link>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn} className='bg-primary'>

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
        </div>
        </>
    )
}

export default Login
