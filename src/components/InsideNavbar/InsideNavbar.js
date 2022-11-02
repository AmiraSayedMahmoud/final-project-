import './InsideNavbar.css';
import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import FoodCard from '../FoodCard';
import SearchBar from '../SearchBar/SearchBar';


export default function InsideNavbar() {
  // const [items, setItems] = useState([]);
  // const [q, setQ] = useState("");
  // const [searchParam] = useState(["foodName"]);
//   return items.filter((item) => {
//     return searchParam.some((newItem) => {
//         return (
//             item[newItem]
//                 .toString()
//                 .toLowerCase()
//                 .indexOf(q.toLowerCase()) > -1
//         );
//     });
// });

return (
  <>
 <nav style={{ marginLeft: "30%", marginTop: "5%" }}>
  <ul>
    <li>
    <NavLink to='/foods' className="nav-link active" aria-current="page" >All Food</NavLink>
    </li>
    <li>
    <NavLink to="/new" className="nav-link active" aria-current="page" >Add Food</NavLink>
    </li>
    <li>
    <NavLink to="/assigntrainee" className="nav-link active" aria-current="page">Assigned Food</NavLink>
    </li>
    <li>
    <NavLink to="/alltrainee" className="nav-link active" aria-current="page" >All Trainees</NavLink>
    </li>
    <li>
    <SearchBar placeholder="Enter a Food Name..."/>
    </li>
    
  </ul>
 </nav>
 
 </>
)
}
