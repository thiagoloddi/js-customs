import React from 'react';
import styled from 'styled-components';
import FontCard from './FontCard';
import Carousel from '../../../components/Carousel';

const StyledComponent = styled.div`
  margin-top: 30px;
  .fonts-carousel-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
  }
`;

const FontsCarousel = ({ fonts = [], title, onCardClick, selected }) => {
  
  return (
    <StyledComponent>
      <div className="fonts-carousel-title">{title}</div>
      <Carousel
        items={fonts.map(font => (
          <FontCard selected={selected && selected.family === font.family} onClick={onCardClick} font={font} />
        ))}
      />
    </StyledComponent>
  );
}

export default React.memo(FontsCarousel);