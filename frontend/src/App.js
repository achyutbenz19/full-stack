import React, { useEffect, useState } from "react";

function App() {

  const [data, setdata] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:5000/users", {
      "methods": "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>Flask MonogoDB</h1>
    </div>
  );
}

export default App;
