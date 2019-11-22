import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import styled from 'styled-components';

const StyledComponent = styled.div`
  padding: 12px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  
  .color-inputs {
    display: inline-flex;
    justify-content: flex-end;

    .color-picker {
      border: 1px solid rgba(0, 0, 0, 0.15);
      width: 100px;
      min-height: 100%;
      color: transparent;
      background-color: ${props => props.color};
      cursor: pointer;
    }
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

const ColorInput = ({ title, onChange, id }) => {

  const [color, setColor] = useState("#fff");
  const [showPicker, setShowPicker] = useState(false);

  const changeColor = (color, id, onChange) => {
    onChange({ [id]: color });
  }

  useEffect(changeColor.bind(null, color, id, onChange), [color]);

  return (
    <StyledComponent color={color}>
      <label>{title}</label>
      <div className="color-inputs">
        <div className="color-picker" onClick={() => setShowPicker(true)}>
          &nbsp;
        </div>
      </div>
      {showPicker ? 
        <div className="picker-popover">
          <div className="picker-cover" onClick={() => setShowPicker(false)} />
          <SketchPicker color={color} onChangeComplete={value => setColor(value.hex)}/>
        </div> : 
        null
      }
    </StyledComponent>
  );
}

export default ColorInput;