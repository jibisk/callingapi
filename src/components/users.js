import axios from "axios";
import React, { useEffect, useState } from "react";
import "./users.css";

export default function Users() {
  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/users");
      await setData(response.data);
  };

  useEffect(() => {
    fetchUsers()

  }, [data])
  

  return (
    <div className="users">
      <div className="">
        <button onClick={fetchUsers}>Get Users</button>
        {data.map((user) => (
          <div key={user.id}>{user.name} - 
          <span>{user.email}</span> - 
          <span style={{color:'red'}}>{user.address.street}</span>
          </div>          
        ))}
      </div>
    </div>
  );
}
