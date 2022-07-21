import axios from "axios";
import React, { useEffect, useState } from "react";
import MainMenuItems from "./MainMenuItems";

import MenuItems from "./menuItems";

import  "./navbar.css";

export default function NavBar() {
 // const [data, setData] = useState([]);

//   const fetchUsers = async () => {
//     const response = await axios
//       .get("https://jsonplaceholder.typicode.com/users");
//       await setData(response.data);
      
//   };

//   useEffect(() => {
//     fetchUsers()
//   }, [data])
  

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         {MenuItems.map((menu, index) => (
          <MainMenuItems items={menu} key={index} />          
        ))}
      </ul>      
    </div>
  </div>
</nav>
</>
  );
}
