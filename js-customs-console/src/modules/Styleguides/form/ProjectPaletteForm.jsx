import React from 'react';
import styled from 'styled-components';
import FormLabel from './FormLabel';
import FormSubtitle from './FormSubtitle';
import PaletteColorInput from './PaletteColorInput';
import NextButton from '../../../components/inputs/NextButton';
import ColorExample from './ColorExample';

const StyledComponent = styled.div`
  max-height: inherit;
  
  .palette {
    margin-top: 20px;
  }
`;

const ProjectPaletteForm = ({ palette, onChange, nextStep }) => {

  const onColorChange = (id, value) => {
    onChange({ ...palette, [id]: value });
  }

  return (
    <StyledComponent palette={palette}>
      <FormLabel color={palette.fontPrimary} label="Ok, we finnally got rid of that Times New Roman." />
      <FormLabel color={palette.fontPrimary} label="Let's add some colors!" />
      <FormSubtitle color={palette.fontSecondary} text="You can create your own palette picking the colors below, or you can select one of the available presets."/>

      <div className="palette">
        <PaletteColorInput onChange={onColorChange} color={palette.primary} id="primary" label="PRIMARY" />
        <PaletteColorInput onChange={onColorChange} color={palette.accentDark} id="accentDark" label="ACCENT DARK" />
        <PaletteColorInput onChange={onColorChange} color={palette.accentLight} id="accentLight" label="ACCENT LIGHT" />
        <PaletteColorInput onChange={onColorChange} color={palette.fontPrimary} id="fontPrimary" label="FONT PRIMARY" />
        <PaletteColorInput onChange={onColorChange} color={palette.fontSecondary} id="fontSecondary" label="FONT SECONDARY" />
        <PaletteColorInput onChange={onColorChange} color={palette.background} id="background" label="BACKGROUND" />
      </div>

      <ColorExample palette={palette} />

      <NextButton onClick={nextStep} label="Next" bgColor={palette.primaryDark} fontColor={palette.fontLight} />

    </StyledComponent>
  );
}

export default ProjectPaletteForm;