import React from "react";
import './products.css';
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProductList=()=>{
    const dispatch=useDispatch();
const pstate=useSelector(state=>state.productreducer.products);
console.log(pstate);
const addtocart=(id)=>{
    console.log(id);
    
}
const item=pstate.slice(0,6);
return(
<div className="product_block">
    <div className="container">
    <div className="row">
{item.map((pitem,i)=>{
    
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
</div>
)

}

export default ProductList;