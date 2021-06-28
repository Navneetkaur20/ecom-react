import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Title from '../components/Products/Title';
const Related=()=>{
    const {pid}=useParams();
    console.log("id",pid);
   
    const related=useSelector(state=>state.productreducer.products);
   console.log(related)
    const product = useSelector(state=>state.productreducer.product);
    
    console.log("h1",product);
    const dispatch=useDispatch();
useEffect(()=>{
    dispatch({type:'productshow',id:pid})
},[pid])

const membersToRender = related.filter(member => member.category_name===product.category_name
    &&  member. product_id!== product.product_id)
const count=membersToRender.length;
console.log("cout",count)
    return(
        <>
       {count > 0?
        <section className="related-block">
            <Title title="Related Products" text="Vitae posuere urna blandit sed. Praesent ut dignissim risus"/>
<div className="container">
    <div className="row">
    {related.map((val)=>{
        if(val.category_name===product.category_name && val. product_id!== product.product_id){
 return(
    
    <div className="pro_detail related-pro" key={val.product_id}>
        <div className="pro_img">
        <img src={`../${val.product_image}`}/>
        <div className="site-over">
        <button className="site-btn" >add to cart</button>
        </div>
        </div>
        <div className="pro_text">  
        <Link to={`${val.product_id}`}>
        <h3 className="p-title">{val.product_title}</h3> 
        </Link> 
          
        <p className="p-price">Rs. {val.product_price}</p>

        </div>
        </div>
  
  
 )
            }     
    
 } ) }
</div>
</div>
</section>: ""}
</>
    )
}

export default Related;
