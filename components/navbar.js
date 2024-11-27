"use client";

import Link from 'next/link';
import '../styles/navbar.css';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';


const Navbar = () => {
  const pathname = usePathname(); // Get the current path
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(()=>{
    setIsMenuOpen(false);
  },[pathname])

  // Debugging output to check pathname
  console.log("pathname === '/'", pathname, pathname === '/vending-machine-franchise.html')

  return (
    <header>
      <nav>
        <div className="logo">
   <h1 style={{fontSize:"30px",fontWeight:"bold",padding:"5%"}}>PARADISE_HOPE</h1>
        </div>
        {/* Hamburger menu */}
        <div
          className={`hamburger ${isMenuOpen ? 'toggle' : ''}`}
          onClick={toggleMenu}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        {/* Navigation links */}
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link
              href="/"
              className={pathname === '/' ? 'active' : ''}
              style={{
                color: pathname === '/' ? 'white' : '',
                fontWeight: pathname === '/' ? 'bold' : ''
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/profile.html"
              style={{
                color: pathname === '/profile' || pathname === '/profile.html' ? 'white' : '',
                fontWeight: pathname === '/profile' || pathname === '/profile.html' ? 'bold' : ''
              }}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/Projects"
              style={{
                color: pathname === '/Projects' || pathname === '/Projects.html' ? 'white' : '',
                fontWeight: pathname === '/Projects' || pathname === '/Projects.html' ? 'bold' : ''
              }}
            >
             Projects
            </Link>
          </li>
          <li>
            <Link
              href="/achievement"
              style={{
                color: pathname === '/achievement' || pathname === '/achievement.html' ? 'white' : '',
                fontWeight: pathname === '/achievement' || pathname === '/achievement.html' ? 'bold' : ''
              }}
            >
              Achievement
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              style={{
                color: pathname === '/faq' || pathname === '/faq.html' ? 'white' : '',
                fontWeight: pathname === '/faq' || pathname === '/faq.html' ? 'bold' : ''
              }}
            >
              FAQs
            </Link>
          </li>
          <li className="contact-menu">
            <Link
              href="/faq"
              className={pathname === '/faq' ? 'contact-us-nav active' : 'contact-us-nav'}
              style={{
                color: pathname === '/faq' ? 'black' : 'inherit',
                fontWeight: pathname === '/faq' ? 'bold' : ''
              }}
            >
              Contact us
            </Link>
          </li>
        </ul>

        {/* Contact us button */}
        <div className="component-4">
          <div className="contact-us">Contact us</div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
