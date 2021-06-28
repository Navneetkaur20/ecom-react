import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

// import { Link } from 'react-router-dom';
import Related from '../components/Relatedpro';

import Breadcrumb from '../components/Breadcrumb';
const ProDetail=()=>{
    const {pid}=useParams();
    console.log("id",pid);
   
    // const related=useSelector(state=>state.productreducer.products);
    const product = useSelector(state=>state.productreducer.product);
    console.log("h1",product);
    const dispatch=useDispatch();
useEffect(()=>{
    dispatch({type:'productshow',id:pid})
},[pid])

return(
    <>
< Breadcrumb/>
    <section className="product_block space">
    <div className="container">
    <div className="">

    <div className=" row pro-detail" key={product.product_id}>
        <div className="col-6 pro-d-img ">
        <img src={`../${product.product_image}`}/>
        </div>
        <div className="pro_d-text col-6">  
        
        <h3 className="p-title">{product.product_title}</h3>  
         
        <p className="p-price">Rs. {product.product_price}</p>
        <div className="p-cat">
            <h2>Category:<span>{product.category_name}</span></h2>
        </div>
        <p className="p_desc">{product.product_desc}</p>
<button className="site-btn" onClick={()=>dispatch({type:'ADD_TO_CART',payload:{product}})}>add to cart</button>
        </div>
        </div>
</div>
</div>
</section>
<Related/>
</>
)

}

export default ProDetail;