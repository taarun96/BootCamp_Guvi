import React from 'react';

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm  sticky-top navbar-dark bg-dark mb-3">
        <div className="container-fluid">
          <h1 className="bg-dark text-light my-2">
            <span>&#8377;</span> Money Manager
          </h1>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="!#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
