import React from 'react'
import LogoGreen from './LogoGreen'
import SearchIcon from '@material-ui/icons/Search';

const NavBar = () => {
     return (
          <div className="navbar">
               <div className="logo">
                    <LogoGreen width={100}/>
               </div>
               <div className="search">
                    <p className="breadcum">Desarrollos</p>
                    <SearchIcon  width={20}/>
               </div>
          </div>
     )
}

export default NavBar
