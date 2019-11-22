import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  position: relative;
  overflow: hidden;

  > ul {
    list-style: none;
    padding: 0;
    white-space: nowrap;
    transform: translateX(${props => props.current * -100/props.perSlide}%);
    transition: transform 0.5s;

    > li {
      display: inline-block;
      width: ${props => 100/props.perSlide}%;
      white-space: normal;
      vertical-align: top;
    }
  }
  
  .carousel-cycle-btn {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px;
    background-color: black; 
    opacity: 0;
    cursor: pointer;
    transition: opacity .3s;

    &:hover {
      opacity: 0.6;
    }

    &.next {
      right: 0;
    }
  }
`;

const Carousel = ({ items, perSlide = 3, disableButtons, currentSlide, initialSlide = 0 }) => {

  const [current, setCurrent] = useState(initialSlide);

  useEffect(() => {
    setCurrent(currentSlide);
  }, [currentSlide]);

  const renderButtons = () => {
    if(disableButtons) return null;

    return (
      <>
        <div onClick={cycleCarousel.bind(null, 1)} className="carousel-cycle-btn next" />
        <div onClick={cycleCarousel.bind(null, -1)} className="carousel-cycle-btn prev" />
      </>
    );
  };

  const cycleCarousel = direction => {
    if(items.length > 1) {
      const newSlide = Math.min(items.length - perSlide, Math.max(0, current + direction)); 
      setCurrent(newSlide);
    }
  }

  return (
    <StyledComponent perSlide={perSlide} current={current}>
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      
      {renderButtons()}
      
    </StyledComponent>
  );
}

export default Carousel;