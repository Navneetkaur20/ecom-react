import React from 'react';
import { Link } from 'react-router-dom';
const Footer =()=>{
    return(
        < footer>
<div className="container">
    <div className="row">
    <div className="col-4">
    <h2>Info</h2>
    <ul>
            <li>
            1223, Main Street, New York, 38000 USA
            </li>
            <li>
            888 - 963 - 600 
            </li>
            <li>
               <a href="">info@example.com</a> 
            </li>
        </ul> 
        </div>
        <div className="col-4">
            <h2>Useful Links</h2>
        <ul>
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to="/about">about</Link>
            </li>
            <li>
                <Link to="/shop">shop</Link>
            </li>
            <li>
                <Link to="/contact">contact</Link>
            </li>
        </ul>
        </div>
        <div className="col-4">
            <h2>Social Network</h2>
        <ul>
            <li>
                <Link to="/">Facebook</Link>
            </li>
            <li>
                <Link to="/about">Twitter</Link>
            </li>
            <li>
                <Link to="/shop">Instagram</Link>
            </li>
            <li>
                <Link to="/contact">Linkedin</Link>
            </li>
        </ul>
        </div>
    </div>
</div>
        </footer>
    )
}

export default Footer;