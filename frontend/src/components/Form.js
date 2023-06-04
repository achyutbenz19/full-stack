import React from 'react'

function Form(props) {
  return (
    <div>
        {props.data && props.data.name}

    </div>
  )
}

export default Form;