import React from 'react';
import Button from '../button/button';
import SignIn from '../sign-in/signIn';
import './navbar.css';
function Navbar() {
    return(
<div>
 <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">public.com</a>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Features</a>
        </li>
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Stocks</a>
        </li>
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Crypto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Learn</a>
        </li>

        <li className="nav-item pe-3">
        <Button text="Get the App"/>
        </li>
        <li className="nav-item">
        <SignIn text="Sign In"/>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    )
}
export default Navbar;