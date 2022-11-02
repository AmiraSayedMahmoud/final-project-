import React,{useContext} from 'react'
import { ToCartContext } from '../../Config/ToCartContext';
import { useSelector } from 'react-redux';
import TableOfFood from '../TableOfFood/TableOfFood';


export default function AssignedFood() {
    const {cart,setCart}=useContext(ToCartContext);
    const cartdata=useSelector(state=>state.cart);

    console.log(cartdata)
  return (
    <table className="table my-5" style={{width:"85%",margin:"auto"}}>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Food Image</th>
                    <th scope="col">Food Name</th>
                    <th scope="col">Ingredients of food</th>
                    <th scope="col">Quantity</th>
                </tr>
            </thead>
            <tbody>
                {
                   cartdata.map((item) => <TableOfFood  data={item} />)
                }
            </tbody>
        </table>
  )
}

// <table className="table table-dark">
    // <thead>
    //   <tr>
    //     <th scope="col">#</th>
    //     <th scope="col">Food Name</th>
    //     <th scope="col">Quantity</th>
    //     <th scope="col">Ingredients</th>
    //     <th scope="col">Handle</th>
    //   </tr>
    // </thead>
    // <tbody>
    //     {
    //         arrOfFood.map((item)=><tr key={item._id}>
    //              <td>{item._id}</td>
    //             <td>{item.foodName}</td>
    //             <td>{item.quantity}</td>
    //             <td>{item.ingredients}</td>
    //             <td><button className='btn btn-danger' onClick={()=>{del(item._id)}}>delete</button>
    //             <td><button className='btn btn-primary' onClick={()=>{add(item._id)}}>Add To Cart</button></td>
    //             </td>
                
    //         </tr>)
    //     }
      
        
    // </tbody>
    // </table>