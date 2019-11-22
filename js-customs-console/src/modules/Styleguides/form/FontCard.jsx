import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';

const StyledComponent = styled.div`
  cursor: pointer;
  padding: 5px;

  @font-face {
    font-family: ${props => props.family};
    src: url(${props => props.regular});
  }

  @font-face {
    font-family: ${props => props.family}-bold;
    src: url(${props => props.bold});
  }

  @font-face {
    font-family: ${props => props.family}-thin;
    src: url(${props => props.thin});
  }

  @font-face {
    font-family: ${props => props.family}-italic;
    src: url(${props => props.italic});
  }

  font-family: ${props => props.family};

  .font-card {
    padding: 20px;
    white-space: normal;
    background-color: ${props => props.selected ? 'lightgrey' : ''};

    .font-card-family-name {
      font-size: 26px;
      height: 40px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    .font-card-examples {
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .font-card-bold {
        font-family: ${props => props.family}-bold;
        margin-top: 10px;
        font-size: 18px;
        /* font-weight: bold; */
      }

      .font-card-thin {
        font-family: ${props => props.family}-thin;
        margin-top: 10px;
        font-size: 18px;
      }

      .font-card-italic {
        font-family: ${props => props.family}-italic;
        margin-top: 10px;
        font-size: 18px;
      }
    }


  }
`;

const FontCard = ({ font, onClick, selected }) => {
  return (
    <StyledComponent
      family={font.family} 
      regular={font.files.regular}
      bold={font.files['700']}
      thin={font.files['300']}
      italic={font.files.italic}
      selected={selected}
    >
      <Card className="font-card" onClick={onClick.bind(null, font)}>
        <div className="font-card-family-name">
          {font.family}
        </div>
        <div className="font-card-examples">
          {font.files['700'] ? 
            <div className="font-card-bold">
              This is some BOLD example!
            </div> :
            null
          }
          {font.files['300'] ? 
            <div className="font-card-thin">
              And a really thin one...
            </div> :
            null
          }
          {font.files.italic ?
            <div className="font-card-italic">
              Let's just not forget our pizza friends.
            </div> :
            null
          }
        </div>
      </Card>
    </StyledComponent>
  );
}

export default FontCard;