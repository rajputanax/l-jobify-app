import React from 'react'

const FormRow = ({ name , type, id, placeholder, labelText }) => {
    return (
        <div className="form-row">
            <label
                htmlFor={name}
                className='form-label'>
                {labelText || ''}
            </label>
            <input type={type}
                id={id}
                name={name}
                className='form-input'
                placeholder={placeholder}
                required />
        </div>
    )
}

export default FormRow