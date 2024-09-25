import React from "react";
import './header.css'
import { Link } from "react-router-dom";

export default function Header() {
  return( 
  <nav>
    <h1>This is Header</h1>
    <ul>
        <li> <Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/course'}>Course</Link></li>
    </ul>
  </nav>
  );
}
