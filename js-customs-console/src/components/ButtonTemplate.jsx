import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.button`
  background-color: white;
  border-radius: 15px;
  padding: 8px 16px;
  border: none;
  outline: none;
  cursor: pointer;

  height: ${props => props.customStyle['height'] || 'auto'};
  background-color: ${props => props.customStyle['background-color'] || 'white'};
  padding-top: ${props => props.customStyle['padding-top'] || 0};
  padding-right: ${props => props.customStyle['padding-right'] || 0};
  padding-bottom: ${props => props.customStyle['padding-bottom'] || 0};
  padding-left: ${props => props.customStyle['padding-left'] || 0};
`;

const ButtonTemplate = ({ style }) => {
  return (
    <StyledComponent customStyle={style}>My Button</StyledComponent>
  );
}

export default ButtonTemplate;