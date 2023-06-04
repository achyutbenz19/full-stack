import React from 'react'

function Form(props) {
  return (
    <div>
        {props.data ? (
            <div className = "mb-3">
                <label htmlForm = "title" className = "form-label">Name</label>
                <input type='text' className='form-control' placeholder='Please enter name'/>

                <label htmlForm = "body" className = "form-label">Email</label>
                <input type='text' className='form-control' placeholder='Please enter email'/>

                <label htmlForm = "body" className = "form-label">Phone</label>
                <input type='text' className='form-control' placeholder='Please enter name'/>

                <label htmlForm = "body" className = "form-label">Address</label>
                <input type='text' className='form-control' placeholder='Please enter name'/>
            </div>
            
        ): null}        
    </div>
  )
}

export default Form;