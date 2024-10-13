import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faCalendarAlt, faPhone } from '@fortawesome/free-solid-svg-icons'; 
import logo from "../../assets/logo.webp";

const Container = styled.div`
  position: fixed;
  z-index: 999;
  padding-top: 10px;
  width: 100%; /* Ensure the navbar container takes full width */
  display: flex; /* Flexbox to align content */
  align-items: center; /* Vertically center the content */
`;


const Logo = styled.div`
  width: 5.75rem; 
  margin-bottom: 1rem; 

  img {
    margin-left: 0.3rem;
    width: 100%;
    height: auto; 
    max-height: 5.75rem; 
  }
`;

const SlickBar = styled.ul`
  color: black; 
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center; 
  background-color: #f0f0f0; 
  padding: 0; 
  margin: 0; 
  width: 100%; 
  border-radius: 0 30px 30px 0;
`;

const Item = styled(({ exact, ...props }) => <NavLink {...props} />)`
`;

const Text = styled.span`
`;

const NavBarComponent = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0); 
  };

  return (
    <Container>
    
<header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-[66rem] before:mx-2 before:lg:mx-auto before:rounded-[26px] before:bg-neutral-800/30 before:backdrop-blur-md">
  <nav className="relative max-w-[66rem] w-full py-2.5 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto">
    <div className="flex items-center justify-between">
    
      <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="../templates/agency/index.html" aria-label="Preline">
        <img src={logo} className="w-14 h-14" alt="" />
      </a>
    

      <div className="md:hidden">
        <button type="button" className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none" id="hs-navbar-floating-dark-collapse" aria-expanded="false" aria-controls="hs-navbar-floating-dark" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-floating-dark">
          <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>

   
    <div id="hs-navbar-floating-dark" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-navbar-floating-dark-collapse">
      <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
        <Item onClick={handleLinkClick} to="/">
            <p className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300">Home</p>
        </Item>
        <Item onClick={handleLinkClick} to="/about">
            <p className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300">About Us</p>
        </Item>
        <Item onClick={handleLinkClick} to="/competitions">
            <p className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300">Competitions</p>
        </Item>
        <Item onClick={handleLinkClick} to="/medcon">
            <p className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300">MedCon</p>
        </Item>
        <Item onClick={handleLinkClick} to="/contact-us">
            <p className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300">Contact Us</p>
        </Item>
      </div>
    </div>

  </nav>
</header>

    </Container>
  );
};

export default NavBarComponent;