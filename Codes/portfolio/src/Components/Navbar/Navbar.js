import React from 'react'
import "./Nav.css"
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const categories = ['About', 'Resume','Projects','Socials'];

  return (
    <nav class="navbar">
            <ul class="navbar-list">
            {categories.map((category, index) => (
          <li key={index} className="navbar-item">
            <Link to={`/${category.toLowerCase()}`} className={location.pathname === `/${category.toLowerCase()}` ? 'navbar-link active' : 'navbar-link'}>
              {category}
            </Link>
          </li>
        ))}
            </ul>
          </nav>
  )
}
