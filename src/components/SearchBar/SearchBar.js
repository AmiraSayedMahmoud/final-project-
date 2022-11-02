import React,{useState,useEffect} from 'react'
import { FaClosedCaptioning, FaSearch } from 'react-icons/fa';
import {axiosInstance} from '../../Config/axios'
import './SearchBar.css'

export default function SearchBar({placeholder}) {
    const [arrOfFood,setArrOfFood]=useState([])
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    
    useEffect(()=>
    {
      axiosInstance.get('api/v1/healthyfoods').then((res)=>
     {
      // console.log(res)
      setArrOfFood(res.data.healthyFood)
      console.log(res.data.healthyFood)
     }
      )
      
    },[])
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = arrOfFood.filter((value) => {
            return value.foodName.toLowerCase().includes(searchWord.toLowerCase());
          });
          if (searchWord === "") {
            setFilteredData([]);
          } else {
            setFilteredData(newFilter);
          }
        };
      
        const clearInput = () => {
            setFilteredData([]);
            setWordEntered("");
          };
  return (
    <div>
    <form className="d-flex " style={{position: "relative",top:"-0.5rem"}} role="search">
    <input className="form-control me-2 " type="text" value={wordEntered} placeholder={placeholder} aria-label="Search" onChange={handleFilter} />
    <button className="search" type="submit" onClick={clearInput} >Search</button>
  </form>
  {filteredData.length != 0 && (
  <div className='dataResult'>
      {filteredData.slice(0, 15).map((value,key) => {
        return <a className='dataItem' href='#'>{value.foodName}</a>
      })}
  </div>
 ) }
  </div>
  )
}
{/* <div className="searchIcon">
{filteredData.length === 0 ? (
  <FaSearch />
) : (
  <FaLock id="clearBtn" onClick={clearInput} />
)}
</div> */}