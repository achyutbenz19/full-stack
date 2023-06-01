import React, { useEffect, useState } from "react";
import DataList from "./components/dataList";

function App() {

  const [datas, setDatas] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:5000/users", {
      "method": "GET",
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
      <DataList datas = {datas}/>
    </div>
  );
}

export default App;