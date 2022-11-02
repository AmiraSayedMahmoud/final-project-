import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import {ToCartContext} from './Config/ToCartContext';
import HealthyFood from './Pages/HealthyFood';
import Food from './components/Food/Food';
import AddNewFood from './components/AddNewFood/AddNewFood';
import Footer from './components/Footer';
import AllTrainee from './components/AllTrainee/AllTrainee';
import AssignedFood from './components/AssignedFood/AssignedFood';




function App() {
  const[cart,setCart]=useState([]);
  return (
    <> 
    <ToCartContext.Provider value={{cart,setCart}}>
    <Navbar/>
    <HealthyFood/>
    <Routes>
    
    <Route path='/foods' element={<Food/>} />
    <Route path='/new' element={<AddNewFood/>}/>
    <Route path='/alltrainee' element={<AllTrainee/>}/>
    <Route path='/assigntrainee' element={<AssignedFood/>}/>
  </Routes>
  
    {/* <HeroSection/> */}
    {/* <Main/> */}
    {/* <FoodCard/> */}
    {/* <TableOfFood/> */}
    <Footer/>
    {/* <SignUpForm/> */}
    </ToCartContext.Provider>
    </>
   
  );
}

export default App;
