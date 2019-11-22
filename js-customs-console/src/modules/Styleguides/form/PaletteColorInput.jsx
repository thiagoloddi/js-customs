import React, { useState } from 'react';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';


const StyledComponent = styled.div`
  display: inline-block;
  width: ${100/6}%;
  background-color: ${props => props.color};
  height: 300px;
  cursor: pointer;

  .pallet-color-label {
    font-size: 12px;
    padding: 10px 0;
    color: white;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    text-align: center;
  }

  .picker-popover {
    position: absolute;

    .picker-cover {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
`;

const PalletColorInput = ({ label, id, color, onChange }) => {

  const [showPicker, setShowPicker] = useState(false);

  const setColor = value => {
    onChange(id, value);
  }

  return (
    <StyledComponent onClick={() => setShowPicker(true)} color={color}>
      <div className="pallet-color-label">{label}</div>
      {showPicker ? 
        <div className="picker-popover">
          <div className="picker-cover" onClick={e => { e.stopPropagation(); setShowPicker(false); }} />
          <SketchPicker color={color} onChangeComplete={value => setColor(value.hex)}/>
        </div> : 
        null
      }
    </StyledComponent>
  );
}

export default PalletColorInput;