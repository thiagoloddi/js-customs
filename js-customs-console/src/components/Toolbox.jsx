import React from 'react';
import styled from 'styled-components';
import ToolboxSection from './ToolboxSection';
import DimensionInput from './inputs/DimensionInput';
import ColorInput from './inputs/ColorInput';

const StyledComponent = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  border-left: 2px solid rgba(0, 0, 0, 0.2);
  min-height: 100vh;
  width: 300px;
`;

const Toolbox = ({ onInputChange, initialValues, initialUnits, fields }) => {
  return (
    <StyledComponent>
      {fields.map(f => (
        <ToolboxSection key={f.label} title={f.label} render={() => (f.sections.map(s => {

          switch(s.type) {
            case 'dimension':
              return (
                <DimensionInput
                  key={s.label}
                  title={s.label}
                  onChange={onInputChange}
                  units={s.units}
                  fields={s.props.map(p => ({ ...p, defaultValue: initialValues[p.id], defaultUnit: initialUnits[p.id] }))}
                />
              );

            case 'color':
              return <ColorInput key={s.label} onChange={onInputChange} id={s.id} title={s.label} />;

            default:
              return null;
          }
        }))} />
      ))}
      {/* <div>box</div>
      <div>text</div>
      <div>border</div>
      <div>shadow</div> */}
    </StyledComponent>
  );
}

export default Toolbox;