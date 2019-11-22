import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  background-color: ${props => props.theme.colors.appPrimary};
  color: ${props => props.theme.colors.fontSecondary};
  padding: 20px;
  font-size: 20px;
`;

const Header = () => {
  return (
    <StyledComponent>
      
    </StyledComponent>
  );
}

export default Header;