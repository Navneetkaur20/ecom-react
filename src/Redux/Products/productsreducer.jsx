import {products} from '../../data/products';
const initialstatep={
    products:products,
    a:10,
    product: {}
}

const productreducer=(state = initialstatep,action)=>{
    console.log("h1",action.id)
switch(action.type){
    
    case "productshow":
        return { 
            ...state,product:state.products.find(pro=>pro.product_id===parseInt(action.id))}
    default: return state;
}
}

export default productreducer;