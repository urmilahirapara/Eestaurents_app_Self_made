import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem"
import {clearCart} from "../utils/cartSlice";
const Cart=()=>{    
    const dispatch=useDispatch((store)=>store.cart.items.length);
    const cartItems = useSelector((store) => store.cart.items);
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return <div>
        <h1 className="font-bold text-3xl ">Cart Items--{cartItems.length}</h1>
        <button className="bg-green-100 p-2 m-5" onClick={()=>handleClearCart()}>Clear Items</button>
       <div className="p-4 flex flex-wrap items-center">
       {cartItems.map(item => <FoodItem key={item.id} {...item}/>)}
       </div>
        
    </div>

}
export default Cart;