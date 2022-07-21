
import { Link } from "react-router-dom";

const Dropdown = ({ submenus }) => {
  return (
   <ul className="dropdown-menu">
    {submenus.map((submenu, index) => (
     <li key={index} >
      <Link to={submenu.link} className="dropdown-item">{submenu.title}</Link>
     </li>
    ))}
   </ul>
  );
 };
 
 export default Dropdown;