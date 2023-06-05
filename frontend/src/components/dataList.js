import React from 'react';
import APIService from './APIService';

function DataList(props) {

  const editData = (data) => {
    props.editData(data)
  }

  const deleteData = (data) => {
    APIService.DeleteData(data._id)
    .then(() => props.deleteData(data))
  }

  return (
    <div>
      {props.datas && props.datas.map(data => {
        return (
          <div key = {data._id}>
            <h2>{data.name}</h2>
            <h3>{data.phone}</h3>
            <h3>{data.address}</h3>
            <h3>{data.email}</h3>

            <div className='row'>
                <div className='col'>
                    <button className='btn btn-primary'
                    onClick={() => editData(data)}>Update</button>
                </div>

                <div className='col'>
                    <button className='btn btn-danger'
                    onClick={() => deleteData(data)}>Delete</button>
                </div>

            </div>   

            <hr/> 

          </div>
        )
      })}
    </div>
  )
}

export default DataList;