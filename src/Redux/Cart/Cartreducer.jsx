import {products} from '../../data/products';
const cinital={
    p:products,
    products:[],
totalPrice: 0,
totalqty: 0,
Tpricee:0
}
const Cartreducer=(state=cinital,action)=>{
    let findPro;
   
   let index;
//   state.Tprice=state.p.product_price;
  
switch(action.type){
    case 'ADD_TO_CART':
        const {product} = action.payload;
        // console.log("cart",product)
        index = state.products.findIndex(product => product.product_id === product.product_id);
        const check = state.products.find(pr => pr.product_id === product.product_id);
        if(check){
            alert("already in cart");
            return state;
          
        } else {
            const Tprice = state.totalPrice + product.product_price*product.qty;
            // console.log("price",Tprice)
            const Tquantities = state.totalqty+product.qty
            // const tprice=state.Tprice+product.product_price;
            // state.products[index].Tprice = tprice;
            // console.log(Tquantities)
           
            return {
                ...state, products: [...state.products, product],totalPrice: Tprice, totalqty: Tquantities 
                
            }

        }

        case "cart":
             const check2 = state.p.find(pr => pr.product_id === action.payload);
            // console.log("1",check1.product_id);
// console.log(products.product_id)
             const check1 = state.products.find(pr1 => pr1.product_id === check2.product_id);
        //      console.log(check1)
         if(check1){
                alert("already in cart");
        return state;
              
      } 
      else {
                const Tprice = state.totalPrice + check2.product_price*check2.qty;
                 console.log("price",Tprice)
                 const Tquantities = state.totalqty+check2.qty
                 console.log(Tquantities)
               
                return {
                    ...state, products: [...state.products, check2],totalPrice: Tprice,
                     totalqty: Tquantities 
               }
    
             }


             case "REMOVE": 
               findPro = state.products.find(product => product.product_id === action.payload);
                const filtered = state.products.filter(product => product.product_id !== action.payload);
                const Tprice = state.totalPrice - findPro.product_price*findPro.qty;
                const Tquantities = state.totalqty-findPro.qty
               console.log("my",filtered);
                    return {
                        ...state,
                        products: filtered,totalPrice: Tprice, totalqty: Tquantities 

                  }

                  case "incrQty":
                      findPro = state.products.find(product => product.product_id === action.payload);
                   index = state.products.findIndex(product => product.product_id == action.payload);
                findPro.qty+=1;
                
              
                
                return{
                    ...state,
                   totalPrice: state.totalPrice+findPro.product_price, totalqty: state.totalqty+1,
        

                }
      

                case "decQty":
                    findPro = state.products.find(product => product.product_id === action.payload);
                //  index = state.products.findIndex(product => product.product_id !== action.payload);
                 if(findPro.qty>1){
                    findPro.qty-=1;
                   
                    return{
                    ...state,
                    totalPrice: state.totalPrice-findPro.product_price, totalqty: state.totalqty-1
                    }
                 }
                 else{
return state;
                 }
            
            
    


    default:  return state
}
}

export default Cartreducer;
