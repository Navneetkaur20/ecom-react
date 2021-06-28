import React from 'react'
import {  useLocation } from "react-router-dom";

// const pathname = window.location.pathname;
// console.log(pathname);
// console.log("home",location.pathname);
const Breadcrumb=()=>{
    const location=useLocation();
    return(
       <section className="breadcrumb">
           <div className="container">
<ul className='row'>
    <li>Home</li>
    <li className="active">{location.pathname}</li>
</ul>
           </div>
       </section>
    )
}
export default Breadcrumb;