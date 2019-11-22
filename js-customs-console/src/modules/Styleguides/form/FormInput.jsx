import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.input`
  margin-top: 35px;
  font-size: 42px;
  color: rgba(0, 0, 0, 0.7);
  outline: none;
  width: 100%;
  border: none;
  border-bottom: 4px solid rgba(0, 0, 0, 0.3);
  font-weight: bold;
  font-family: inherit;


  ::placeholder { /* Firefox, Chrome, Opera */ 
    color: rgba(0, 0, 0, 0.2); 
  }
    
  :-ms-input-placeholder { /* Internet Explorer 10-11 */ 
    color: rgba(0, 0, 0, 0.2); 
  } 
    
  ::-ms-input-placeholder { /* Microsoft Edge */ 
    color: rgba(0, 0, 0, 0.2); 
  }
`;

const FormInput = ({ value, onChange, placeholder }) => {
  return (
    <StyledComponent type="text" value={value} onChange={onChange} placeholder={placeholder} />
  );
}

export default FormInput;