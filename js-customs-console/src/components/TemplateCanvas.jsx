import React from "react";
import styled from "styled-components";

const StyledComponent = styled.div`
  display: inline-block;
  padding: 50px;
  background-color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TemplateCanvas = ({ render, className }) => {
  return <StyledComponent className={className}>{render()}</StyledComponent>;
};

export default TemplateCanvas;
