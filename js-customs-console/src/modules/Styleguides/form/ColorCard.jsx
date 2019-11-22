import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const StyledComponent = styled.div`
  padding: 5px; 
  cursor: pointer;
  .color-card-content {
    padding: 16px;

    & > :first-child {
      margin-bottom: 10px;
    }
  }
`;

const ColorStripe = styled.div`
  display: inline-block;
  width: ${100/6}%;
  height: 100px;
  background-color: ${props => props.color};
`;

const ColorCard = ({ name, palette }) => {
  return (
    <StyledComponent>
      <Paper className="color-card-content">
        <div>{name}</div>
        <div>
          <ColorStripe color={palette.primary} />
          <ColorStripe color={palette.secondary} />
          <ColorStripe color={palette.font} />
          <ColorStripe color={palette.background} />
          <ColorStripe color={palette.success} />
          <ColorStripe color={palette.error} />
        </div>
      </Paper>
    </StyledComponent>
  );
}

export default ColorCard;