import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '../ui/button'
import { ModeToggle } from '../mode-toggle'
import { Avatar } from '../ui/avatar'
import { NavDropdown } from '../ui/NavDropDown'
import ShinyButton from '../magicui/shiny-button'


const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Login",
      path: "/login"
    }
  ]
  return (
    <div className="relative top-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center bg-background">
      <div className="w-1/4 h-full text-primary font-bold flex justify-start items-center text-2xl font-serif absolute left-5"> Cameo</div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-center items-center gap-8'>
        {/* <Link to='/'>Home </Link>
        <Link to='/login'>Login </Link>
        <Link to='/register'>Register </Link> */}
        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path} className='text-foreground'>
                {links.title}
              </NavLink>
            </li>
          ))
        }
      </div>
      {/* <Button className="absolute right-5 rounded-3xl">Join Now</Button> */}
      <div className="absolute right-5 flex-row flex gap-2">
      <ModeToggle/>
      <NavDropdown/>
      </div>
    </div>
  )
}

export default Navbar