import { useEffect } from 'react'
import './App.css'
import React from 'react';

function App() {
  const loginUser = async () => {
    try {
    const response = await fetch('http://127.0.0.1:5000/login/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name_user:"Ines",
          password_user:"963"
        })
      });
      const data = await response.json();
      console.log(data);
  } catch (error) {
    console.log(error);
    }
  };

useEffect (() => {
  loginUser();
  console.log("hola Yuliia");
}), [];
 
  
  return (
    <>
     <h1>Esto es login</h1>
    </>
  )
}

export default App

// try {
//   const response = await fetch('http://127.0.0.1:5000/login', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name_user:"Ines",
//     password_user:"963"
//   })
// });
// const data = await response.json();
// console.log(data);
// } catch (error) {
//   console.log(error);
// }