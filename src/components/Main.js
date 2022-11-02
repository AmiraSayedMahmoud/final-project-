import React, { useState, useEffect} from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import FoodCard from './FoodCard';
import { axiosInstance } from '../Config/axios';
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
import AddFood from './AddFood';
import Food from './Food/Food';
import SidebarFilter from './SidebarFilter';
import InsideNavbar from './InsideNavbar/InsideNavbar';

import AddNewFood from './AddNewFood/AddNewFood';

import Profile from '../Pages/Profile';

export default function Main() {
   
    


    return (
        
        <section >
          
        <div className="healthyFood">
            <div className="main">
            <InsideNavbar/>
                {/* <h2><span>S</span>petial Diet</h2>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ullam!</h6> */}
            </div>
            <div className="d-flex row justify-content-around">
                <div style={{width:"30%",marginTop:"1em"}} > 
                {/* filter */}

                <div style={{width:"100%"}}>
                    {/* <h2>Filter By:</h2>
<div className="accordion  mt-3" id="accordionPanelsStayOpenExample">
  <div className="accordion-item border border-white" >
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{backgroundColor:"#222",color:"var(--white)"}}>
       Food Time
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne" >
  
    <div className="p-2">
    <input type="checkbox" className="ms-2"/>
    <label className="check ms-3">Breakfast</label>
  </div>
  <div className="p-2">
    <input type="checkbox" className="ms-2"/>
    <label className="check ms-3">Lunch</label>
  </div>
  <div className="p-2">
    <input type="checkbox" className="ms-2"/>
    <label className="check ms-3">Diner</label>
  </div>
    
    </div>
  </div>
  <div className="accordion-item border border-white" >
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button  collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{backgroundColor:"#222",color:"var(--white)"}}>
        Food Type
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo" >
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
  <div className="p-2">
    <input type="checkbox" className="ms-2"/>
    <label className="check ms-3">Snacks</label>
  </div>
   
   
    </div>
  </div>
 
</div> */}
<SidebarFilter/>
</div>
<div style={{width:"100%",border:"solid 2px orange"}}><AddFood/></div>
</div>

        
       <div className="content">
            
<Food/>
  {/* <Routes>
    <Route index element={<Food/>}/>
    <Route path='/foods' element={<Food/>} />
    <Route path='/new' element={<AddNewFood/>} />
    <Route path='/profile' element={<Profile/>}/>
  </Routes> */}
 
 
  {
//   arrOfFood.map((item)=><div key={item._id} ><FoodCard data={item}/>

//     </div>) 
}
            
           
            </div>
            </div>
        </div>
      
    </section>
    )
  };

