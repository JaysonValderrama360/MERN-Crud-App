import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfusers] = useState([]);
  const [name, setName] = useState("");
  const [npi, setNpi] = useState(0);
  const [address, setAddress] = useState("");
  const [telephone, setPhone] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getusers").then((response) => {
      setListOfusers(response.data);
    });
  }, []);

  const createUser = () => {
     Axios.post("http://localhost:3001/createusers", {
       name, 
       npi, 
       address, 
       telephone, 
       email,
      }).then((response) => {       
       alert("USER REGISTERED");
     });
  };

  return (
    <div className="App">
     <div className="usersDisplay">
       {listOfUsers.map((user) => {
         return  (
          <div>
           {" "} 
           <h1>Name: {user.name}</h1>
           <h1>NPI Number: {user.npi}</h1>
           <h1>Business Address: {user.address}</h1>
           <h1>Phone Number: {user.telephone}</h1>
           <h1>Email: {user.email}</h1>
          </div>
         )
       })}

     </div>
       <input type ="text" 
       placeholder="Enter Name" 
       onChange={(event) => {
         setName(event.target.value);
        }} 
       />
       <input type ="number" 
       placeholder="Enter NPI Number"
       onChange={(event) => {
        setNpi(event.target.value);
       }}
       />
       <input type ="text" 
       placeholder="Enter Business Address"
       onChange={(event) => {
        setAddress(event.target.value);
       }}
       />
       <input type ="number" 
       placeholder="Enter Phone Number"
       onChange={(event) => {
        setPhone(event.target.value);
       }}
       />
       <input type ="text" 
       placeholder="Enter Email"
       onChange={(event) => {
        setEmail(event.target.value);
       }}/>
       <button onClick={createUser}> Register </button>
     <div>

     </div>
    </div>
  );
}

export default App;
