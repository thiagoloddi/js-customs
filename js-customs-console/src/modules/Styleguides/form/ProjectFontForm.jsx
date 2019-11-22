import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FormLabel from './FormLabel';
import FormInput from './FormInput';
import FormSubtitle from './FormSubtitle';
import { getFonts } from '../../../repositories/google_fonts_repository';
import FontsCarousel from './FontsCarousel';
import NextButton from '../../../components/inputs/NextButton';

const StyledComponent = styled.div`
`;

const ProjectFontForm = ({ name = "Project name", onCardClick, selected, nextStep }) => {
  const [popularFonts, setPopularFonts] = useState([]);
  // const [trendingFonts, setTrendingFonts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getFonts('&sort=popularity')
      .then(data => {
        setPopularFonts(data.items.splice(0, 10));
      });
  }, []);

  // useEffect(() => {
  //   getFonts('&sort=trending')
  //     .then(data => {
  //       setTrendingFonts(data.items.splice(0, 10));
  //     });
  // }, []);

  return (
    <StyledComponent>
      <FormLabel label={<span>Awesome! <strong>{name}</strong> is a great name!</span>} />
      <FormLabel label="Now let's find a nice stylish font:" />
      <FormSubtitle text="You can use the text field below to search for a font you like. You can also pick one of the populars." />
      <FormSubtitle text="Try picking one to see how it feels." />
      <FormInput onChange={e => setSearch(e.target.value)} value={search} placeholder="Type Here"/>
      <FontsCarousel selected={selected} onCardClick={onCardClick} title="Popular Fonts" fonts={popularFonts} />
      {/* <FontsCarousel selected={selected} onCardClick={onCardClick} title="Trending Fonts" fonts={trendingFonts} /> */}
      <NextButton onClick={nextStep} label="Next" />
    </StyledComponent>
  );
}

export default ProjectFontForm;