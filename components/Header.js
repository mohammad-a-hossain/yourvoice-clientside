 import React, { useState,useEffect } from 'react';
 import Link from 'next/link'
//  import NProgress from 'nprogress'
 import Router from 'next/router'
 import { APP_NAME } from '../config';
 import {signout,isAuth} from '../actions/auth'
 import Search from './blog/Search'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
// for progress bar using in 
// Router.routeChangeStart  = url => NProgress.start()
// Router.routeChangeComplete = url =>NProgress.done()
// Router.routeChangeError = url => NProgress.done()
 
  const Header =()=>{
    // const [isBrowser, setIsBrowser] = useState(false);

    // useEffect(() => {
    //   process.browser && setIsBrowser(true);
    // }, []);

   const [isOpen, setIsOpen] = useState(false);
   const [authenticated,setAuthenticated] = useState(false)

   const toggle = () => setIsOpen(!isOpen);

     useEffect(()=>{
       setAuthenticated(isAuth())
     },[])

   return ( <div>
    <Navbar color="light" light expand="md">
      <Link href="/">
        <NavLink className="font-weight-bold">{APP_NAME}</NavLink>
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>

        <React.Fragment>
        <NavItem>
          <Link href="/blogs">
            <NavLink>Blogs</NavLink>
          </Link>
        </NavItem>
        <NavItem>
        <Link href="/Contact">
          <NavLink>Contact</NavLink>
        </Link>
      </NavItem>
      </React.Fragment>
          {!authenticated && (
            <React.Fragment>
              <NavItem>
                <Link href="/signin">
                  <NavLink>Signin</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/signup">
                  <NavLink>Signup</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>
          )}

          {authenticated && authenticated.role === 0 && (
            <NavItem>
              <Link href="/user">
                <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
              </Link>
            </NavItem>
          )}

          {authenticated && authenticated.role === 1 && (
            <NavItem>
              <Link href="/admin">
                <NavLink>{`${authenticated.name}'s Dashboard`}</NavLink>
              </Link>
            </NavItem>
          )}

          {authenticated && (
            <NavItem>
              <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
                Signout
              </NavLink>
            </NavItem>
          )}

          <NavItem>
          <Link href="/user/crud/Blog">
            <NavLink className="btn btn-primary text-light">Write Blog</NavLink>
          </Link>
        </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    <Search />
  </div>


  );
};

export default Header;