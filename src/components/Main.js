import React, { useState} from 'react'
import img1 from '../images/food/1.jpg';
import img2 from '../images/food/2.jpg';
import imgdiet1 from '../images/food/diet1.jpg';
import img3 from '../images/food/budget-bytes-Drizzle-with-Dressing-5c09748dc9e77c0001829de0.jpg'
import imgdiet2 from '../images/food/diet2.jpg';
import imgdiet3 from '../images/food/diet4.jpg';
import imgdiet5 from '../images/food/diet5.jpg';
import imgdiet6 from '../images/food/diet6.jpg';
import img4 from '../images/food/Essential-Guide-to-Healthy-Eating-2.png';
import img5 from '../images/food/greek-salmon-bowl.jpeg';
import img6 from '../images/food/healthy-food-gourmet.jpg';
import img7 from '../images/food/images.jpg';

export default function Main() {
   var arr=[];
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
        function add(index)
        {
           var itemindex=arrOfFood.findIndex((item)=>item._id==index);
           alert(itemindex);
            if(!localStorage.getItem("data"))
            {
                console.log(arrOfFood[itemindex])
                arr.push(arrOfFood[itemindex]);
                localStorage.setItem("data",JSON.stringify(arr));
        
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
        <section >
        <div className="healthyFood">
            <div className="main">
                <h2><span>S</span>petial Diet</h2>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ullam!</h6>
            </div>
            <div className="d-flex row justify-content-around">
                <div style={{width:"30%",marginTop:"1em"}}>
                    <h2>Filter By:</h2>
<div className="accordion  mt-3" id="accordionPanelsStayOpenExample">
  <div className="accordion-item border border-white" >
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{backgroundColor:"#222",color:"var(--white)"}}>
       Breakfast
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne" >
  
    <div className="p-2">
    <input type="checkbox" className="ms-2"/>
    <label className="check ms-3">Sweet Food</label>
  </div>
  <div className="p-2">
    <input type="checkbox" className="ms-2"/>
    <label className="check ms-3">Hot Food</label>
  </div>
  <div className="p-2">
    <input type="checkbox" className="ms-2"/>
    <label className="check ms-3">Drinks</label>
  </div>
    </div>
  </div>
  <div className="accordion-item border border-white" >
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button  collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{backgroundColor:"#222",color:"var(--white)"}}>
        Lunch
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo" >
    <div className="p-2">
    <input type="checkbox" className="ms-2"/>
    <label className="check ms-3">Check me out</label>
  </div>
  <div className="p-2">
    <input type="checkbox" className="ms-2"/>
    <label className="check ms-3">Check me out</label>
  </div>
    </div>
  </div>
  <div className="accordion-item border border-white">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={{backgroundColor:"#222",color:"var(--white)"}}>
        Dinner
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree" >
    <div className="p-2">
    <input type="checkbox" className="ms-2"/>
    <label className="check ms-3">Check me out</label>
  </div>
  <div className="p-2">
    <input type="checkbox" className="ms-2"/>
    <label className="check ms-3">Check me out</label>
  </div>
    </div>
  </div>
  <div className="accordion-item border border-white">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{backgroundColor:"#222",color:"var(--white)"}}>
        Snacks
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
    <div className="p-2">
    <input type="checkbox" className="ms-2"/>
    <label className="check ms-3">Check me out</label>
  </div>
  <div className="p-2">
    <input type="checkbox" className="ms-2"/>
    <label className="check ms-3">Check me out</label>
  </div>
    </div>
  </div>
</div>
</div>
            <div className="content">
            
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control mb-3" type="search" placeholder="Search" aria-label="Search" style={{width:"90%",margin:"auto"}}/>
    </form>
  </div>
  {
  arrOfFood.map((item)=><div key={item._id} className="container">
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
                            <button className='btn' onClick={()=>{add(item._id)}}>Add Food</button>
                        </div>
                    </div>
    </div>) 
}
                {/* <div className="container">
                    <div className="thecard">
                        <div className="front">
                            <img src={img1} style={{width:"100%",height:"80%",position:"relative"}}/>
                            <div class="discription">
                               <h5 class="title">Food Name</h5> 
                                <h6 class="quantity">100g</h6>
                            </div>
                        </div>
                        <div class="back">
                            <h3>Details</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis cumque qui obcaecati nemo beatae repellendus aspernatur eaque hic ullam assumenda.</p>
                            <a href="#">Add Food</a>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="thecard">
                        <div class="front">
                            <img src={img2} style={{width:"100%",height:"80%",position:"relative"}}/>
                            <div class="discription">
                                <h5 class="title">Food Name</h5>
                                <h6 class="quantity">100g</h6>
                            </div>
                        </div>
                        <div class="back">
                            <h3>Details</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis cumque qui obcaecati nemo beatae repellendus aspernatur eaque hic ullam assumenda.</p>
                            <a href="#">Add Food</a>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="thecard">
                        <div class="front">
                            <img src={img3} style={{width:"100%",height:"80%",position:"relative"}}/>
                            <div class="discription">
                                <h5 class="title">Food Name</h5>
                                <h6 class="quantity">100g</h6>
                            </div>
                        </div>
                        <div class="back">
                            <h3>Details</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis cumque qui obcaecati nemo beatae repellendus aspernatur eaque hic ullam assumenda.</p>
                            <a href="#">Add Food</a>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="thecard">
                        <div class="front">
                            <img src={imgdiet1 } style={{width:"100%",height:"80%",position:"relative"}}/>
                            <div class="discription">
                                <h5 class="title">Food Name</h5>
                                <h6 class="quantity">100g</h6>
                            </div>
                        </div>
                        <div class="back">
                            <h3>Details</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis cumque qui obcaecati nemo beatae repellendus aspernatur eaque hic ullam assumenda.</p>
                            <a href="#">Add Food</a>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="thecard">
                        <div class="front">
                            <img src={imgdiet2} style={{width:"100%",height:"80%",position:"relative"}}/>
                            <div class="discription">
                                <h5 class="title">Food Name</h5>
                                <h6 class="quantity">100g</h6>
                            </div>
                        </div>
                        <div class="back">
                            <h3>Details</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis cumque qui obcaecati nemo beatae repellendus aspernatur eaque hic ullam assumenda.</p>
                            <a href="#">Add Food</a>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="thecard">
                        <div class="front">
                            <img src={imgdiet3} style={{width:"100%",height:"80%",position:"relative"}}/>
                            <div class="discription">
                                <h5 class="title">Food Name</h5>
                                <h6 class="quantity">100g</h6>
                            </div>
                        </div>
                        <div class="back">
                            <h3>Details</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis cumque qui obcaecati nemo beatae repellendus aspernatur eaque hic ullam assumenda.</p>
                            <a href="#">Add Food</a>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="thecard">
                        <div class="front">
                            <img src={imgdiet5} style={{width:"100%",height:"80%",position:"relative"}}/>
                            <div class="discription">
                                <h5 class="title">Food Name</h5>
                                <h6 class="quantity">100g</h6>
                            </div>
                        </div>
                        <div class="back">
                            <h3>Details</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis cumque qui obcaecati nemo beatae repellendus aspernatur eaque hic ullam assumenda.</p>
                            <a href="#">Add Food</a>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="thecard">
                        <div class="front">
                            <img src={imgdiet6} style={{width:"100%",height:"80%",position:"relative"}}/>
                            <div class="discription">
                                <h5 class="title">Food Name</h5>
                                <h6 class="quantity">100g</h6>
                            </div>
                        </div>
                        <div class="back">
                            <h3>Details</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis cumque qui obcaecati nemo beatae repellendus aspernatur eaque hic ullam assumenda.</p>
                            <a href="#">Add Food</a>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="thecard">
                        <div class="front">
                            <img src={img4} style={{width:"100%",height:"80%",position:"relative"}}/>
                            <div class="discription">
                                <h5 class="title">Food Name</h5>
                                <h6 class="quantity">100g</h6>
                            </div>
                        </div>
                        <div class="back">
                            <h3>Details</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis cumque qui obcaecati nemo beatae repellendus aspernatur eaque hic ullam assumenda.</p>
                            <a href="#">Add Food</a>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="thecard">
                        <div class="front">
                            <img src={img5 } style={{width:"100%",height:"80%",position:"relative"}}/>
                            <div class="discription">
                                <h5 class="title">Food Name</h5>
                                <h6 class="quantity">100g</h6>
                            </div>
                        </div>
                        <div class="back">
                            <h3>Details</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis cumque qui obcaecati nemo beatae repellendus aspernatur eaque hic ullam assumenda.</p>
                            <a href="#">Add Food</a>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="thecard">
                        <div class="front">
                            <img src={img6} style={{width:"100%",height:"80%",position:"relative"}}/>
                            <div class="discription">
                                <h5 class="title">Food Name</h5>
                                <h6 class="quantity">100g</h6>
                            </div>
                        </div>
                        <div class="back">
                            <h3>Details</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis cumque qui obcaecati nemo beatae repellendus aspernatur eaque hic ullam assumenda.</p>
                            <a href="#">Add Food</a>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="thecard">
                        <div class="front">
                            <img src={img7} style={{width:"100%",height:"80%",position:"relative"}}/>
                            <div class="discription">
                                <h5 class="title">Food Name</h5>
                                <h6 class="quantity">100g</h6>
                            </div>
                        </div>
                        <div class="back">
                            <h3>Details</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis cumque qui obcaecati nemo beatae repellendus aspernatur eaque hic ullam assumenda.</p>
                            <a href="#">Add Food</a>
                        </div>
                    </div>
                </div> */}
           
            </div>
            </div>
        </div>
    </section>
    )
  };

