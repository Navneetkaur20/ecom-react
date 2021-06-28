import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import {MdDeleteForever} from 'react-icons/md';
// import {removeFromCart} from '../Redux/Cart/CartActions';

const Cart=()=>{
  const dispatch=useDispatch();
  const {products,totalPrice}=useSelector(state=>state.Cartreducer);
  
  
  console.log("cart",products)
return(
    <>
     <Breadcrumb/>
     {products.length > 0 ?<>
     <section className="space cart-block">
      <div className="container">
     <table>
       <thead>
         <tr>
           <th>product image</th>
         <th>title</th>
         <th>price</th>
         <th>qty</th>
       
         <th>Remove</th>
         </tr>

       </thead>
    
      <tbody>
      {
          products.map((pro,i)=>{
            const {product_id} =pro;
            return(
        <tr >
          <td><img src={pro.product_image}/></td>
          <td>{pro.product_title}</td>
          <td>{pro.product_price}</td>
          <td>
            <button  className="c-btns" onClick={() => dispatch({type: 'incrQty', payload: product_id})}>+</button>
            {pro.qty}
            <button className="c-btns"   onClick={() => dispatch({type: 'decQty', payload: product_id})}>-</button>
            </td>
          <td><button className="del-cart" onClick={() => dispatch({type: 'REMOVE', payload: product_id})}><MdDeleteForever/></button></td>
        </tr>
          )
        })
      }
      </tbody>

      
       

    </table>
    <div className="cart-bottom">
    <ul className="row">
      
          <li>
        <Link to="/shop">
      <button class="site-btn">Continue Shopping</button>
    </Link>
    </li>

        <li>Total Price:{totalPrice}</li>
        <li>
        <Link to="/shop">
      <button class="site-btn">Checkout</button>
    </Link>
    </li>
      </ul>
      </div>
    </div>
  </section> 
  </>: <div className=" container space empty-cart">
    <h1>Your cart is empty</h1>
    <Link to="/shop">
      <button class="site-btn">Continue Shopping</button>
    </Link>
    </div>}
    </>
)
}
export default Cart;