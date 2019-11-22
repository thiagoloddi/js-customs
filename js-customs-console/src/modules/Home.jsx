import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 100px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 60px;
`;

const Home = () => {
  return (
    <StyledComponent>
      <Title>Welcome to JSX Customs</Title>
    </StyledComponent>
  );
}

export default Home;