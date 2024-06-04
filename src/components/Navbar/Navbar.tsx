import React from "react"; 
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Navbar.css";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="relative container mx-auto p-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-20">
        {/* <Link to="/">
          <img src={logo} alt="" />
        </Link> */} 
        
        <div className="hidden font-bold lg:flex">
         {/*  <Link to="/search" className="text-black hover:text-darkBlue">
            Search
          </Link>  */}
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;