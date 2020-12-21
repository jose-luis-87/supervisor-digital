import React from 'react'
import LogoGreen from './LogoGreen'
import SearchIcon from '@material-ui/icons/Search';

const NavBar = () => {
     function GotoLink(url) {
          window.location.href = url;
           }
     
     return (
          <div className="navbar">
               <div className="logo"  onClick={()=>{GotoLink("/home")}}>
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
