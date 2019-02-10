import React from 'react';

const Input = ({title, state, name},onChange, index) => {
    return (
        <div key={name} className= "input">
           <label className = {`input-number ${state == '' ? 'gray' : 'blue'}`}>{index + 1}</label>
           <input name={name} value={state} onChange={onChange}/>
           <label className = "input-title">{title}</label>
        </div>
    )
}

export default Input;