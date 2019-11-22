import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  padding-left: 20px;
  padding-top: 20px;
  vertical-align: top;
  border-right: 2px solid rgba(0, 0, 0, 0.2);
  min-height: 100vh;

  .menu-title {
    font-size: 20px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.56);
  }
`;

const SideMenu = () => {
  return (
    <StyledComponent>
      <div className="menu-title">JSX Customs</div>
    </StyledComponent>
  );
}

export default SideMenu;