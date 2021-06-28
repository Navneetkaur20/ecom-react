import React from 'react';
import { Link } from "react-router-dom";
import {useDispatch } from "react-redux";
const FilterShop =(props)=>{
    const dispatch=useDispatch();
    return(
        <div className="col-7">
    <div className="row">
        
{props.proArray.map((pitem,i)=>{
    
    const {product_id,product_image,product_title,product_price} =pitem;
    const product=pitem;
return(
   
    <div className="pro_detail" key={product_id}>
        <div className="pro_img">
        <img src={product_image}/>
        <div className="site-over">
        <button className="site-btn" onClick={()=>dispatch({type:'ADD_TO_CART',payload:{product}})}
         >add to cart</button>
        </div>
        </div>
        <div className="pro_text">  
        <Link to={`product/${product_id}`}>
        <h3 className="p-title">{product_title}</h3> 
        </Link> 
          
        <p className="p-price">Rs. {product_price}</p>

        </div>
        </div>
       
)
})

}
</div>
</div>
    )
}
export default FilterShop;