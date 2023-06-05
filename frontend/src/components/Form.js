import React, { useState, useEffect } from 'react'
import APIService from './APIService'

function Form(props) {

    const[ name, setName ] = useState('')
    const[ email, setEmail ] = useState('')
    const[ phone, setPhone ] = useState('')
    const[ address, setAddress ] = useState('')
    
    useEffect (() => {
        setName(props.data.name)
        setEmail(props.data.email)
        setPhone(props.data.phone)
        setAddress(props.data.address)
    },[props.data])

    const updateData = () => {
        APIService.UpdateArticle(props.data._id, {name, email, phone, address})
        .then(resp => props.updatedData(resp))
        .catch(err => console.log(err))
    }

    const insertData = () => {
        APIService.InsertData({name, email, phone, address})
        .then(resp => props.insertedData(resp))
        .catch(err => console.log(err))
    }

    return (
        <div>
            {props.data ? (
                <div className = "mb-3">
                    <label htmlFor = "name" className = "form-label">Name</label>
                    <input type='text' className='form-control' placeholder='Please enter name' value = {name} onChange={(e) => setName(e.target.value)}/>

                    <label htmlFor = "email" className = "form-label">Email</label>
                    <input type='text' className='form-control' placeholder='Please enter email' value = {email} onChange={(e) => setEmail(e.target.value)}/>

                    <label htmlFor = "phone" className = "form-label">Phone</label>
                    <input type='text' className='form-control' placeholder='Please enter name' value = {phone} onChange={(e) => setPhone(e.target.value)}/>

                    <label htmlFor = "address" className = "form-label">Address</label>
                    <input type='text' className='form-control' placeholder='Please enter name' value = {address} onChange={(e) => setAddress(e.target.value)}/>
                
                    {
                        props.data._id ? <button onClick={updateData} className='btn btn-sucess mt-3'>Update</button>
                    : <button onClick={insertData} className='btn btn-sucess mt-3'>Insert</button> }

                </div>
                
            ): null}        
        </div>
    )
}

export default Form;