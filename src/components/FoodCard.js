import React, {useEffect, useState} from 'react'
import { ToCartContext } from '../Config/ToCartContext';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {addToCart} from '../Redux/Actions/ToCartAction';
import { delFromCart } from '../Redux/Actions/FromCartAction';
import { axiosInstance } from '../Config/axios';
import { FaCartPlus, FaLink, FaTrash} from "react-icons/fa"; 
import { useFormik } from 'formik';
import * as yup from 'yup';
import{store} from '../Redux/Store'

export default function FoodCard({data,user,deletefood}) {
  const [arrOfFood,setArrOfFood]=useState([])
   const navigate = useNavigate();


  const [isEditShow, invokeEditModal] = React.useState(false)
   // pop up for edit form from icon
   const initEditModal = (item) => {
    console.log(item);
    invokeEditModal(!isEditShow)
    console.log("Edit")
}


const dispatch = useDispatch();
  var arr=[];
// const [foodCard,setFoodCard] = useState(data)
function del(name)
      {
         console.log(name)
         deletefood(name)
       
        
         setArrOfFood((prev)=>prev.filter((item)=>item.foodName!=name));
       axiosInstance.delete('api/v1/healthyfoods/delete/'+name).then((res) =>{
           console.log(res)
           
           
       })
       
      }
  function add(data){
    console.log(data)
    data.email=user;
     dispatch(addToCart(data))
     axiosInstance.patch('api/v1/users//addHealthyFood',data).then((res)=>
        {
            console.log(res);
            
        })
     
  }

  const schema = yup.object().shape({
    foodName: yup.string().required('Required'),
    foodTime: yup.string().required('Required'),
    foodType:yup.string().required('Required'),
    ingredients:yup.string(),
    imgFood:yup.string(),
});
  const formik = useFormik({
    initialValues: {
        foodName: data.foodName,
        foodTime: data.foodTime,
        foodType: data.foodType,
        ingredients:data.ingredients,
        imgFood:'',

    },
    onSubmit: values => {
        var form=new FormData();
      form.append("foodName",values.foodName)
      form.append("foodTime",values.foodTime)
      form.append("foodType",values.foodType)
      form.append("ingredients",values.ingredients)
      form.append('imgFood',values.file);
      console.log(values)
      axiosInstance .patch('api/v1/healthyfoods/update', values).then(function (response) {
          console.log(response);
          setArrOfFood(response.values)
      })
    //   navigate('/foods')
  },
  validationSchema: schema
});
  return (
  <div className="container">
    <div className="thecard">
                        <div className="front">
                            <img src={`http://localhost:8000/${data.imgFood}`} style={{width:"100%",height:"80%",position:"relative"}}/>
                            <div className="discription">
                  
                                <h6 className="title">{data.foodType}: <span >{data.foodName}</span></h6>
                            </div>
                        </div>
                        <div className="back">
                            <h3 style={{fontSize:"1rem",marginTop:"0.5rem",color:"var(--prime)"}}>Details</h3>
                            <h5>{data.foodTime}</h5>
                            <p>{data.ingredients}</p>
                            <div>
                           <button className='btn me-2' onClick={()=>{add(data)}}><FaCartPlus/></button>
                           <button className='btn me-2' onClick={()=>{del(data.foodName)}}><FaTrash/></button>
                           <button onClick={() => { initEditModal(data) }}><FaLink/></button>
                           </div>
                           <Modal show={isEditShow}>
                    <Modal.Header closeButton onClick={initEditModal} style={{ background: "var(--onyx-darker)" }}>
                        <Modal.Title  style={{ color: "--basic-c-white" }}>Edit Food</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ background: "var(--onyx-darker)"}}>
                        {/* form */}
                        <Form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
                                <Form.Group className="mb-2" >
                                    <Form.Label style={{ color: "var(--prime)" }}>Food Name</Form.Label>
                                    <Form.Control type="text" name='foodName' onChange={formik.handleChange}
                                        value={formik.values.foodName} />
                                </Form.Group>

                                <Form.Group className="mb-2" >
                                    <Form.Label style={{ color: "var(--prime)" }}>Food Time</Form.Label>
                                    <Form.Control type="text" name='foodTime' onChange={formik.handleChange}
                                        value={formik.values.foodTime} />
                                </Form.Group>

                                <Form.Group className="mb-2" >
                                    <Form.Label style={{ color: "var(--prime)" }}>Food Type</Form.Label>
                                    <Form.Control type="text" name='foodType' onChange={formik.handleChange}
                                        value={formik.values.foodType} />
                                </Form.Group>

                                <Form.Group  className="mb-3">
                                    <Form.Label style={{ color: "var(--prime)" }}>Ingredients of food</Form.Label>
                                    <Form.Control type="text" name='ingredients'onChange={formik.handleChange}
                                        value={formik.values.ingredients} />
                                </Form.Group>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label style={{ color: "var(--prime)" }}>Food Image</Form.Label>
                                    <Form.Control type="file" name='file'onChange={(event) => {
  formik.setFieldValue("file", event.currentTarget.files[0]);}}
                                        value={formik.values.imgFood} />
                                </Form.Group>

                               

                                

                                <Button  className='buttonApi' style={{ marginLeft: "10px" }} type="submit">
                                    Edit
                                </Button>
                            </Form>
                    </Modal.Body>
                </Modal>
                        </div>
                    </div>
    </div>) 
}

   
//     <div className="card" style={{width: "18rem"}}>
//     <img className="card-img-top" src={data.images[0]} style={{width:"100%", height:"10rem"}}/>
//     <div className="card-body" style={{height:"15rem"}}>
//       <h5 className="card-title">{data.brand}</h5>
//       <p className="card-text">{data.description}</p>
//    {!type&& <button onClick={()=>{go(data)}} className="btn btn-primary me-3">Details</button>}
//     {!type&& <button onClick={()=>{add(data)}} className="btn btn-primary">Add To Cart</button>}
//     </div>
//   </div>
//   )
// }
