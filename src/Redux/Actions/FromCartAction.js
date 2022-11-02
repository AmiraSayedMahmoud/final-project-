import {DELFROMCART } from "../Types"
export const delFromCart=(data)=>
{
    return{
        type:DELFROMCART,
        payload: data
    }
}