import React from 'react';


function FormField({ label, type, name, value, onChange, kind='input'}) {
    
  if(kind === 'input') {
    return (
      <div>
          <label>
          {label}: 

          <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            />
        </label>
      </div>
    )
  } else 
  if(kind === 'textarea'){
    return (
      <div>
          <label>
          {label}: 

          <textarea
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            />
        </label>
      </div>
    )    
  }
}



export default FormField;