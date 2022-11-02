import { ADDTOCART } from "../Types"
export const addToCart=(data)=>
{
    return{
        type:ADDTOCART,
        payload: data
    }
}