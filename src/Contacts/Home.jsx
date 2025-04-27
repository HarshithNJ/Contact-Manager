import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./styles/Home.css"
import Logo from "./img/logo.png"

const Home = () => {
  return (
    <div>
        <div className="navbar">
            <div id='logo'>
                <Link to="/"><img src={Logo} alt="Contacts" /></Link>
                <h2>CONTACTS</h2>
            </div>
            <div id='cts'>
                <Link to="/view"><button><i class="fa-solid fa-address-book"></i></button></Link>
                <Link to="/add"><button><i class="fa-solid fa-user-plus"></i></button></Link>
            </div>
        </div>
        <Outlet></Outlet>
    </div>
  )
}

export default Home