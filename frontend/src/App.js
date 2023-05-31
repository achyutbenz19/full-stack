import React, { useEffect, useState } from "react";

function App() {

  const [datas, setDatas] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:5000/users", {
      "methods": "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(resp => setDatas(resp))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>Flask MonogoDB</h1>

      {datas.map(data => {
        return (
          <div key = {data.id}>
            <h2>{data.name}</h2>
          </div>
        )
      })}
    </div>
  );
}

export default App;
