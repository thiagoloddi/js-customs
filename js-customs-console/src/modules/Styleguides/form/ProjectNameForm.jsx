import React from 'react';
import styled from 'styled-components';
import FormLabel from './FormLabel';
import FormInput from './FormInput';
import NextButton from '../../../components/inputs/NextButton';

const StyledComponent = styled.div`
`;

const ProjectNameForm = ({ name, setName, step }) => {
  return (
    <StyledComponent>
      <FormLabel label="First let's choose a name for our project:" />
      <FormInput value={name} onChange={e => setName(e.target.value)} placeholder="e.g. My Awesome Styleguide"/>
    </StyledComponent>
  );
}

export default ProjectNameForm;