import React, { useState } from 'react'

function Form(props) {

    const[ name, setName ] = useState(props.data.name)
    const[ email, setEmail ] = useState(props.data.email)
    const[ phone, setPhone ] = useState(props.data.phone)
    const[ address, setAddress ] = useState(props.data.address)
    
    return (
        <div>
            {props.data ? (
                <div className = "mb-3">
                    <label htmlForm = "name" className = "form-label">Name</label>
                    <input type='text' className='form-control' placeholder='Please enter name' value = {name} onChange={(e) => setName(e.target.value)}/>

                    <label htmlForm = "email" className = "form-label">Email</label>
                    <input type='text' className='form-control' placeholder='Please enter email' value = {email} onChange={(e) => setEmail(e.target.value)}/>

                    <label htmlForm = "phone" className = "form-label">Phone</label>
                    <input type='text' className='form-control' placeholder='Please enter name' value = {phone} onChange={(e) => setPhone(e.target.value)}/>

                    <label htmlForm = "address" className = "form-label">Address</label>
                    <input type='text' className='form-control' placeholder='Please enter name' value = {address} onChange={(e) => setAddress(e.target.value)}/>

                
                </div>
                
            ): null}        
        </div>
    )
}

export default Form;