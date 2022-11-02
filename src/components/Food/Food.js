import './Food.css'
import React,{ useState, useEffect} from 'react'
import {useLocation } from 'react-router-dom';
import FoodCard from '../FoodCard';
import SidebarFilter from '../SidebarFilter';
import { axiosInstance } from '../../Config/axios';
import InsideNavbar from '../InsideNavbar/InsideNavbar';

export default function Food() {
    const [arrOfFood,setArrOfFood]=useState([])
    // ,{
    //   foodTtime:[],
    // })
    const [filteredFood, setFilteredFood] = useState([])
    // , {
      // --------------------- to filter with body part and map on it --------------------------
      // foodTtime: [],
    // })

    const handleChange = (e) => {
      // Destructuring
      console.log(e);
      const { value, checked } = e.target;
     
      console.log(value)
      console.log(checked)
      // const { foodTtime } = arrOfFood;
      console.log(arrOfFood)
    if (checked) {
      setFilteredFood(
        arrOfFood.filter((e) => e.foodTime == value)
      )
      console.log(filteredFood)
    }

    // Case 2  : The user unchecks the box
    else {
      setFilteredFood(
        arrOfFood.filter((e) => e.foodTime )
      );
      console.log(e.foodTime)
    }

    };

    //Filter for Food Type
    const handleChangeForType = (eType) => {
      // Destructuring
      
      const { value, checked } = eType.target;
     
      console.log(value)
      console.log(checked)
      // const { foodTtime } = arrOfFood;
      
    if (checked) {
      setFilteredFood(
        arrOfFood.filter((eType) => eType.foodType == value)
      )
      console.log(filteredFood)
    }

    // Case 2  : The user unchecks the box
    else {
      setFilteredFood(
        arrOfFood.filter((eType) => eType.foodType )
      );
      // console.log(e.foodTime)
    }

    };
    var location = useLocation().state?.clientEmail||"";
    // console.log(location)
  // const [food, setFood] = useState([])

    useEffect(()=>
    {
      axiosInstance.get('api/v1/healthyfoods').then((res)=>
     {
      // console.log(res)
      setArrOfFood(res.data.healthyFood)
      setFilteredFood(res.data.healthyFood)
      console.log(res.data.healthyFood)
     }
      )
      
    },[])

    function deletefood(name)
    {
      var arr=arrOfFood.filter((item)=>item.foodName!=name);
      setArrOfFood([...arr]);
      setFilteredFood([...arr]);
    }

    
    


  return (
    <>
     <div className="d-flex row justify-content-around food">
     <div style={{width:"30%"}}>
     {/* <SidebarFilter handleChange={handleChange} /> */}
     <h2>Filter By:</h2>
<div className="accordion  mt-3" id="accordionPanelsStayOpenExample">
<div className="accordion-item border border-white" >
<h2 className="accordion-header" id="panelsStayOpen-headingOne">
<button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{backgroundColor:"#222",color:"var(--white)"}}>
Food Time
</button>
</h2>
<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne" >

<div className="p-2">
<input type="checkbox" className="ms-2" name='foodTtime' onChange={handleChange} value="Brackfast"/>
<label className="check ms-3">Breakfast</label>
</div>
<div className="p-2">
<input type="checkbox" className="ms-2" name='foodTtime' onChange={handleChange} value="Lunch"/>
<label className="check ms-3">Lunch</label>
</div>
<div className="p-2">
<input type="checkbox" className="ms-2" name='foodTtime' onChange={handleChange} value="Diner"/>
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
<input type="checkbox" className="ms-2" onChange={handleChangeForType} value="Sweet Food"/>
<label className="check ms-3">Sweet Food</label>
</div>
<div className="p-2">
<input type="checkbox" className="ms-2" onChange={handleChangeForType} value="Hot Food"/>
<label className="check ms-3">Hot Food</label>
</div>
<div className="p-2">
<input type="checkbox" className="ms-2" onChange={handleChangeForType} value="Drink"/>
<label className="check ms-3">Drink</label>
</div>
<div className="p-2">
<input type="checkbox" className="ms-2" onChange={handleChangeForType} value="Snack"/>
<label className="check ms-3">Snack</label>
</div>


</div>
</div>
</div>

     </div>
     
     <div className="content">
   {/* { 
   filteredExercise.length !==0 ? filteredExercise.map((item) =>{
    return <div className=''><ExerciseCard data={item} user={location} /></div>})
   arrOfFood.map((item) =>
    return <div className=''><FoodCard data={item} key={item._id} user={location} deletefood={deletefood}/></div>) 
    
    } */}
    {
       filteredFood.map((item) =>{
        return <div className=''><FoodCard data={item} user={location} /></div>
      })
          // filteredFood.length !==0 ? filteredFood.map((item) =>{
          //   return <div className=''><FoodCard data={item} user={location} /></div>
          // })
          // :
          // arrOfFood.map((item) =>{
          //   return <div className=''><FoodCard data={item} key={item._id} user={location} deletefood={deletefood}/></div>
          // })
        }
     </div>
     
     </div>
  
   
    </>
  )
  }
