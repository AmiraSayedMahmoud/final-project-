import { ADDTOCART} from "../Types";
import { DELFROMCART } from "../Types";
export const CartReducer=(state={cart:[]},action)=>
{
    
    switch(action.type)
    {
        case ADDTOCART:
            {
            
                 return{
                    ...state,
                    cart:[...state.cart,action.payload]
                  
                }
    

            }
        case DELFROMCART:
                {
                    console.log("del")
                    console.log('deleteMessageState', state)
                   console.log('deleteMessageAction', action)
                    
                        // ...state,
                       state.cart = state.cart.filter((p)=> 
                            p.foodName != action.payload
                                
                       )
                    
                    console.log("delete full")
                    
                    console.log(state)
                }
        default:return state;
       
    }
}
