import React, { useState } from 'react'
import imgdiet2 from '../images/food/diet2.jpg';
export default function TableOfFood() {
    var arr=[];
    // const [arr, setArr] = useState([]);
    const [arrOfFood,setArrOfFood]=useState([
{"_id":"633c4b4a466b7c9a488f632f","foodName":"Chicken with vegetables","quantity":"500g","ingredients":"This meal consists of: 200 grams (chicken breasts) and 300 grams (a group of fresh vegetables)"},
{"_id":"633c536034932756a2f4df92","foodName":"Pasta with basil sauce + grilled chicken breast","quantity":"500g","ingredients":"This meal consists of: 200 grams (chicken breasts) and 100 grams (boiled pasta [any shape)] 200 grams (a group of fresh vegetables)"},
{"_id":"633c568034932756a2f4df95","foodName":"sauteed vegetables","quantity":"500g","ingredients":"This meal consists of: 100 grams (potatoes), 100 grams (zucchini), 100 grams (carrots), 100 grams (peas) and 100 grams (colored peppers)"},
{"_id":"633c59c534932756a2f4df98","foodName":"Healthy boiled rice","quantity":"500g","ingredients":"This meal consists of: 500 grams (rice)"},
{"_id":"633c5b2134932756a2f4df9b","foodName":"Grilled fish without oil","quantity":"500g","ingredients":"This meal consists of: 500 grams (grilled fish)"},
{"_id":"633c5c9934932756a2f4df9e","foodName":"Healthy chicken with broccoli","quantity":"600g","ingredients":"This meal consists of: 500 grams (chicken breasts), 100 grams (broccoli)"},
{"_id":"633c5ece34932756a2f4dfa1","foodName":"Grilled salmon","quantity":"500g","ingredients":"This meal consists of: 500 grams (salmon fillet), 1 piece (lemon juice)"},
{"_id":"633c5fbe34932756a2f4dfa4","foodName":"Healthy meat with broccoli","quantity":"600g","ingredients":"This meal consists of: 500 grams (meat fillet), 100 grams (broccoli)"},
{"_id":"633c625034932756a2f4dfa7","foodName":"Chicken fajita sandwich","quantity":"300g","ingredients":"This meal consists of: 200 grams (chicken breast), 100 grams (tortilla bread)"},
{"_id":"633c64b334932756a2f4dfaf","foodName":"Potato salad with bacon","quantity":"300g","ingredients":"This meal consists of: 200 grams (bacon), 100 grams (potatoes)"},
{"_id":"633c68ac0cb86b67bc73a0e8","foodName":"Potato salad with baco","quantity":"300g","ingredients":"This meal consists of: 200 grams (bacon), 100 grams (potatoes)"},
{"_id":"633c69462e296f7bf5d87699","foodName":"Potato salad ","quantity":"300g","ingredients":"This meal consists of: 200 grams (bacon), 100 grams (potatoes)"}
]);
function del(index)
      {
        setArrOfFood((prev)=>prev.filter((item)=>item._id!=index));
      }
    //   {data.map((item, id) => {

    //     return <tr key={id}>
    //       {localStorage.setItem('CourseID', item.CourseID)}
function add(index)
{
   var itemindex=arrOfFood.findIndex((item)=>item._id==index);
   alert(itemindex);
    if(!localStorage.getItem("data"))
    {
        console.log(arrOfFood[itemindex])
        arr.push(arrOfFood[itemindex]);
        localStorage.setItem("data",JSON.stringify(arr));
        // setArrOfFood([...arrOfFood])
        // setArr([...arr])

    }
    else
    {
        console.log(arrOfFood[itemindex])
        arr = JSON.parse(localStorage.getItem("data"));
        arr.push(arrOfFood[itemindex]);
        localStorage.setItem("data",JSON.stringify(arr));
        // setArrOfFood([...arrOfFood])
    }
    console.log(arr)
    
}

  return (
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


    arrOfFood.map((item)=><div key={item._id} className="container">
    {/* <img src={} class="card-img-top"/> */}
    <div class="thecard">
                        <div class="front">
                            <img src={imgdiet2} style={{width:"100%",height:"80%",position:"relative"}}/>
                            <div class="discription">
                                <h5 class="title">{item.foodName}</h5>
                                <h6 class="quantity">{item.quantity}</h6>
                            </div>
                        </div>
                        <div class="back">
                            <h3>Details</h3>
                            <p>{item.ingredients}</p>
                            <button className='btn btn-primary' onClick={()=>{add(item._id)}}>Add Food</button>
                        </div>
                    </div>
    </div>) 
  )
}
