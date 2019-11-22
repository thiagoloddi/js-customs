import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  font-size: 24px;
  color: ${props => props.color || 'rgba(0, 0, 0, 0.4)'}; 
`;

const FormSubtitle = ({ text, color }) => {
  return (
    <StyledComponent color={color}>{text}</StyledComponent>
  );
}

export default FormSubtitle;