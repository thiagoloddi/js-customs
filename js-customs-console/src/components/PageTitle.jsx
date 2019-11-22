import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.h1``;

const PageTitle = ({ children }) => {
  return (
    <StyledComponent>{children}</StyledComponent>
  );
}

export default PageTitle;