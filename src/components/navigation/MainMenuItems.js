
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";


  const MainMenuItems = ({ items }) => { 

  return (
    <>
    {items.submenu ? (
      <li className="nav-item dropdown">
       <Link className="nav-link" to="/"  data-bs-toggle="dropdown" >
       {items.title}
       </Link>
       <Dropdown submenus={items.submenu} />
       </li>
     ) : (
      <li className="nav-item" >
      <Link className="nav-link" to={items.link} >{items.title}</Link>
      </li>
     )}
     </>
)
}
export default MainMenuItems;

