import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonTemplate from '../../components/ButtonTemplate';
import TemplateCanvas from '../../components/TemplateCanvas';
import PageTitle from '../../components/PageTitle';
import Toolbox from '../../components/Toolbox';
import buttonToolbox from '../../toolbox/button.toolbox';

const StyledComponent = styled.div`
  min-height: 100vh;

  .components-create-container {
    padding: 24px 48px;
    margin-right: 300px;

    .template-canvas {
      width: 100%
    }
  }
`;

const INITIAL_VALUES = {
  height: 0,
  width: 0,
  'padding-top': 8,
  'padding-right': 16,
  'padding-bottom': 8,
  'padding-left': 16,
};

const INITIAL_UNITS = {
  height: 'auto',
  width: 'auto',
  'padding-top': 'px',
  'padding-right': 'px',
  'padding-bottom': 'px',
  'padding-left': 'px',
}

const getInitialStyle = (initialValues, initialUnits) => {
  return Object.keys(initialValues).reduce((acc, current) => {
    acc[current] = (initialValues[current] || '') + initialUnits[current];
    return acc; 
  }, {});
}

const ComponentsCreate = () => {

  const [style, setStyle] = useState(getInitialStyle(INITIAL_VALUES, INITIAL_UNITS));

  const onInputChange = values => {
    setStyle({ ...style, ...values });
  }

  return (
    <StyledComponent>
      <div className="components-create-container">
        <PageTitle>Create Component</PageTitle>
        <TemplateCanvas className="template-canvas" render={() => <ButtonTemplate style={style} />} />
      </div>
      <Toolbox initialValues={INITIAL_VALUES} initialUnits={INITIAL_UNITS} fields={buttonToolbox} onInputChange={onInputChange} />
    </StyledComponent>
  );
}

export default ComponentsCreate;