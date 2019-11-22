import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import ProjectNameForm from './form/ProjectNameForm';
import ProjectFontForm from './form/ProjectFontForm';
import ProjectPaletteForm from './form/ProjectPaletteForm';
import ProjectControlsForm from './form/ProjectControlsForm';
import Carousel from '../../components/Carousel';
import NextButton from '../../components/inputs/NextButton';

const StyledComponent = styled.div`
  @font-face {
    font-family: ${props => props.font ? props.font.family : ''};
    src: url(${props => props.font ? props.font.url : ''}); 
  }

  width: 100%;
  min-height: 100vh;
  padding: 16px 24px;
  font-family: ${props => props.font ? props.font.family : 'serif'};
  background-color: #F4F6F9;

  .styleguide-form-card {
    margin: 10px;
    /* overflow: auto; */
    padding: 48px 48px;
    height: 100%;
    transition: height 5s;

    &.hide {
      height: 0;
    }
  }
`;

const INITIAL_COLORS = {
  primary: '#002FA7',
  accentLight: '#8AABFF',
  accentDark: '#00127C',
  fontPrimary: '#2E384D',
  fontSecondary: '#979CA6',
  background: '#F4F6F9'
};

const StyleguidesCreate = props => {

  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [font, setFont] = useState(null);

  const [palette, setPalette] = useState(INITIAL_COLORS);

  const nextStep = () => {
    if(step === 0 && !name) return;
    if(step === 1 && !font) return;

    setStep(step + 1);
  }

  const renderSteps = () => {
    return [
      <ProjectNameForm key={0} name={name} setName={setName} />,
      <ProjectFontForm key={1} name={name} onCardClick={onFontCardClick} selected={font} />,
      <ProjectPaletteForm key={2} palette={palette} onChange={palette => setPalette(palette)} />,
      <ProjectControlsForm key={3} palette={palette} />,
    ].map((form, i) => (
      <Card className={`styleguide-form-card ${step !== i ? 'hide' : ''}`}>
        {form}
        <NextButton onClick={nextStep} label="Next" />
      </Card>)
    );
  }

  const onFontCardClick = font => {
    setFont({ url: font.files.regular, family: font.family });
  }

  return (
    <StyledComponent color={palette.background} font={font}>
      <Container fixed>
        <Carousel perSlide={1} currentSlide={step} items={renderSteps()} />
      </Container>
    
    </StyledComponent>
  );
}

export default withRouter(StyleguidesCreate);