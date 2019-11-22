import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  .toolbox-title {
    padding: 5px 10px;
    background-color: #F4F6F9;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const ToolboxSection = ({ render, title }) => {
  return (
    <StyledComponent>
      <div className="toolbox-title">
        {title}
      </div>
      {render()}
    </StyledComponent>
  );
}

export default ToolboxSection;