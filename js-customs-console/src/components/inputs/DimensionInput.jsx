import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  padding: 12px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  label {
    font-weight: bold;
    font-size: 14px;
  }

  .dimension-inputs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;

    input {
      width: 75px;
      margin-right: 10px;
    }
  }
`;

const reduceToObj = (arr, field) => {
  return arr.reduce((acc, current) => {
    acc[current.id] = current[field];
    return acc;
  }, {});
}

const DimensionInput = ({ title, onChange, fields, units: unitOptions }) => {

  const [values, setValues] = useState(reduceToObj(fields, 'defaultValue'));
  const [units, setUnits] = useState(reduceToObj(fields, 'defaultUnit'));

  const changeInput = (values, units, onChange) => {
    const style = {};

    for(let k in values) {
      style[k] = units[k] === 'auto' ? units[k] : values[k] + units[k];
    }
    onChange(style);
  }
  
  useEffect(changeInput.bind(null, values, units, onChange), [values, units])

  
  return (
    <StyledComponent>
      <div>{title}</div>
      {fields.map(f => (
        <div key={f.id} className="dimension-inputs">
          <label>{f.label}</label>
          <div>
            <input
              value={values[f.id]}
              onChange={e => setValues({ ...values, [f.id]: e.target.value})}
              disabled={units[f.id] === "auto"} 
              type="number" 
            />
            <select value={units[f.id]} onChange={e => setUnits({ ...units, [f.id]: e.target.value})}>
              {unitOptions.map(u => <option key={u.label} value={u.label}>{u.label}</option>)}
            </select>
          </div>
        </div>
      ))}
    </StyledComponent>
  );
}

export default DimensionInput;