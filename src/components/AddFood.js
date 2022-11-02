import React, {useContext} from 'react'
import FoodCard from './FoodCard';
import { ToCartContext } from '../Config/ToCartContext';
import { useSelector } from 'react-redux';

export default function AddFood() {
    const {cart,setCart}=useContext(ToCartContext);
    const cartdata=useSelector(state=>state.cart);
  return (
    <>
    <div className='row'>
    {
      cartdata.map((item)=><div key={item.id} >
        <div className="onAddfood">
    <div className="thecard">
                        <div className="front">
                            <img src={item.imgFood} style={{width:"100%",height:"80%",position:"relative"}}/>
                            <div className="discription">
                                <h5 className="title">{item.foodName}</h5>
                            </div>
                        </div>
                        <div className="back">
                            <h3>Details</h3>
                            <p>{item.ingredients}</p>
                           {/* {!type && <button className='btn' onClick={()=>{add(data)}}>Add Food</button>} */}
                        </div>
                    </div>
    </div>
      </div>)
    }
    </div>
    </>
  )
}
{/* <FoodCard type="cart"  data={item} style={{width:"10em",height:"150px"}} /> */}