import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.label`
  font-size: 48px;
  display: inline-block;
  width: 100%;
  color: ${props => props.color || 'rgba(0, 0, 0, 0.6)'};
  font-weight: bold;
`;

const FormLabel = ({ label, color }) => {
  return (
    <StyledComponent color={color}>{label}</StyledComponent>
  );
}

export default FormLabel;