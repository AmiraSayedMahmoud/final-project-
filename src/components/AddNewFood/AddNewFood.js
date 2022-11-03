import './AddNewFood.css'
import React, { useState, useEffect}  from 'react'
import { axiosInstance } from '../../Config/axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../Redux/Actions/ToCartAction';

export default function AddNewFood() {
  const dispatch = useDispatch();
  const [arrOfFood,setArrOfFood]=useState([])
  // useEffect(()=>
  // {
  //   axiosInstance.post('/healthyfoods',{state:{values}}).then((res)=>
  //  {
  //   // console.log(res)
  //   setArrNewOfFood(res.data.healthyFood)
  //   console.log(res.data.healthyFood)
  //  }
  //   )
  // },[])
    var navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
     foodName: '',
      foodType: '',
      foodTime: '',
      ingredients:'',
      imgFood:'',
    },
    validationSchema: Yup.object({
      foodName: Yup.string().required('Enter food name'),
      foodType: Yup.string().required('Enter food type like (Hot mail, Sweet mail, Drink,& Snacks)'),
      foodTime: Yup.string().required('Enter food time like (Breakfast, Lunsh,& Dinner)'),
      ingredients: Yup.string().required('Enter Ingredients of this food'),
      imgFood: Yup.string()
    }),
    
    onSubmit: values => {

      var form=new FormData();
      form.append("foodName",values.foodName)
      form.append("foodTime",values.foodTime)
      form.append("foodType",values.foodType)
      form.append("ingredients",values.ingredients)
      form.append('imgFood',values.file);
     console.log(values)
    //  const obj = {values}
     axiosInstance.post('api/v1/healthyfoods/add',form).then((res)=>
   {
    console.log(res)
    setArrOfFood(res.values)
        
   }
    )
    // localStorage.setItem("token","Hello");
    //  navigate("/food",{state:{values}})
    // navigate("/foods")
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="newFood">
  <div className="mt-3">
  <label htmlFor="foodName" className="form-label">Food Name</label>
  <input id="foodName" className="form-control" name="foodName" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.foodName}/>
  {formik.touched.foodName && formik.errors.foodName ? ( <div>{formik.errors.foodName}</div> ) : null}
  </div>

  <div className="mt-3">
  <label htmlFor="foodTime" className="form-label">Food Time</label>
  <input id="foodTime" className="form-control" name="foodTime" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.foodTime}/>
  {formik.touched.foodTime && formik.errors.foodTime ? ( <div>{formik.errors.foodTime}</div> ) : null}
  </div>
  
  <div className="mt-3">
  <label htmlFor="foodType" className="form-label">Food Type</label>
  <input id="foodType" className="form-control" name="foodType" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.foodType}/>
  {formik.touched.foodType && formik.errors.foodType ? ( <div>{formik.errors.foodType}</div> ) : null}
  </div>

  <div className="mt-3">
  <label htmlFor="ingredients" className="form-label"> Ingredients</label>
  <input id="ingredients" className="form-control" name="ingredients" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.ingredients} />
  {formik.touched.ingredients && formik.errors.ingredients ? ( <div>{formik.errors.ingredients}</div> ) : null}
 </div>

  <div className="mt-3">
  <label htmlFor="imgFood" className="form-label">Image</label>
  <input id=" imgFood" className="form-control"  name="file" type="file"  onBlur={formik.handleBlur} value={formik.values.imgFood} onChange={(event) => {
  formik.setFieldValue("file", event.currentTarget.files[0]);}}/>
  {formik.touched.imgFood && formik.errors.imgFood ? ( <div>{formik.errors.imgFood}</div> ) : null}
</div>
 
  
  
   <div className="mt-3">
   <button type="submit" className="btnAddNewFood">Add</button>
   </div>
 
</form>
  )
}
// `http://localhost:8000/api/v1/healthyfoods/public/HealthyFood/