import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.button`
    padding: 8px 16px;
    font-size: 20px;
    font-family: inherit;
    margin-top: 20px;
    float: right;
    border: none;
    background-color: ${props => props.bg || 'lightgrey'};
    color: ${props => props.font || 'white'};
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
`;

const NextButton = ({ label, onClick, bgColor, fontColor }) => {
  return (
    <StyledComponent bg={bgColor} font={fontColor} onClick={onClick}>{label}</StyledComponent>
  );
}

export default NextButton;