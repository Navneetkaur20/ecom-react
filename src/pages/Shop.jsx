import React from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";
import FilterShop from '../components/Products/FilterShop.jsx';
import Breadcrumb from '../components/Breadcrumb';
import { useParams } from 'react-router-dom';

const Shop=()=>{
    const r_category=useParams();
    const pstate=useSelector(state=>state.productreducer.products);
const [proArray,setproducts]=useState(pstate);
const newProList=(ct)=>{
    // console.log(ct)
   const get= pstate.filter(pitem=>{
       return  pitem.category_name.toLowerCase()===ct ||  pitem.category_name.toLowerCase()===r_category
    })
    setproducts(get);
}

const CatItems=[...new Set(pstate.map(ele=>{return ele.category_name;}))]
console.log(CatItems)
return(
    <>
    <Breadcrumb/>
    
    <section className="product_block space">
    <div className="container">
    <div className="row">
<div className="col-3 shop-left">
    <h2>Collections</h2>
<ul>
    {
         
   CatItems.map((cate,i)=>{
       
          return(

        <li key={i} onClick={()=>newProList(cate.toLowerCase())} >
            {cate}</li>
          )
        
      }) 

    }
     
    
</ul>

</div>

<FilterShop proArray={proArray}/>
</div>
</div>
</section>
</>
)

}
export default Shop;