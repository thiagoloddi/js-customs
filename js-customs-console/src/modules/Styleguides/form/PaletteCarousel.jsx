import React from 'react';
import styled from 'styled-components';
import Carousel from '../../../components/Carousel';
import ColorCard from './ColorCard';

const StyledComponent = styled.div`
  margin-top: 30px;
`;

const randomColor = () => `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
const randomPalette = () => ({
  name: "Palette " + Math.floor(Math.random() * 100),
  colors: {
    primary: randomColor(),
    secondary: randomColor(),
    font: randomColor(),
    background: randomColor(),
    success: randomColor(),
    error: randomColor(),
  }
});

const SAMPLE_PALETTES = [
  randomPalette(),
  randomPalette(),
  randomPalette(),
  randomPalette(),
  randomPalette(),
];

const PalletCarousel = ({ palette, title, onCardClick, selected }) => {

  const renderItems = () => {
    const items = [];

    items.push(<ColorCard name="My Palette" palette={palette} />);

    items.push(...SAMPLE_PALETTES.map(p => <ColorCard palette={p.colors} name={p.name} />));
    
    return items;
  }

  return (
    <StyledComponent>
      <Carousel
        items={renderItems()}
      />
    </StyledComponent>
  );
}

export default React.memo(PalletCarousel);