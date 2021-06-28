import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar=()=>{
    const pstate=useSelector(state=>state.productreducer.products);
    const CatItems=[...new Set(pstate.map(ele=>{return ele.category_name;}))]
    return(
        <>
        <ul className='row main-menu'>
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to="/about">about</Link>
            </li>

            <li>
                <Link to="/shop">shop</Link>
                <ul className="submenu">
                {
         
         CatItems.map((cate,i)=>{
                return(
                    <Link to={`/shop/cat`}>{cate}</Link>
            //   <li key={i}  >
            //       {cate}</li>
                ) 
            }) 
      
          }
          </ul>

            </li>
            <li>
                <Link to="/contact">contact</Link>
            </li>
        </ul>
        </>
    )
}
export default Navbar;