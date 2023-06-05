import React, { useEffect, useState } from "react";
import DataList from "./components/dataList";
import Form from "./components/Form";

function App() {

  const [datas, setDatas] = useState([])
  const [editedData, setEditedData] = useState(null)

  const updatedData = (data) => {
    const new_data = datas.map(my_data => {
      if (my_data._id === data._id) {
        return data
      } else {
        return my_data
      }
    })
    setDatas(new_data)
  }

  const insertedData = (data) => {
    const new_datas = [...datas, data]
    setDatas(new_datas)
  }

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

  const editData = (data) => {
    setEditedData(data)
  }

  const openForm = () => {
    setEditedData({
      name:'',
      phone:'',
      email:'',
      address:''
    })
  }

  const deleteData = (data) => {
    const new_datas = datas.filter(mydata => {
      if (mydata._id === data._id) {
        return false;
      }
      return true;
    }) 
    setDatas(new_datas)
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <h1>Flask MonogoDB</h1>
        </div>
        <div className="col">
          <button className="btn btn-success" onClick={openForm}>Insert Datas</button>
        </div>
      </div>
      <DataList datas = {datas} editData = {editData} deleteData = {deleteData}/>
      {editedData ? < Form data = {editedData} updatedData = {updatedData} insertedData = {insertedData}/>: null}
    </div>
  );
}

export default App;