import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaCartPlus ,FaSearch} from "react-icons/fa";
import { useSelector } from 'react-redux';
const Header=()=>{
    const totalqty=useSelector(state=>state.Cartreducer.totalqty)
    
return(
    <header>
        
    <div className="header">
       
            <div className="top-header">
            <div className="container">
        <div className="row  ">
            <div className="logo col-3">
               <h1>Logo</h1>
            </div>
            <div className="searchbar col-6 d-flex  p-0">
               
                <input type="text" className="search-field" placeholder="Search products..."/>
         <button className="serach-btn"><FaSearch/></button>
               
        
            </div>
<div className="header-icons col-3">
<ul className="row">
            <li className="head-cart">
                <Link to="/cart"><FaCartPlus/><span>{totalqty}</span></Link>
            </li>
            
        </ul>
</div>
</div>
</div>
        </div>
        <div className="site_menu">
        <div className="container">
        <Navbar/>
        </div>
        </div>
    </div>
   
    </header>
    )

}

export default Header;