import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


export default function Navbar (props) {

      return (
        <div>
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Margaret Hamilton Interplanetary Academy of JavaScript</a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                    <NavLink to={"/home"} className="navLinks" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to={"/campus"} className="navLinks" activeClassName="active">Campus</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to={"/students"} className="navLinks" activeClassName="active">Students</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>         
        </div>
      )
    }



