import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  margin-top: 50px;
  padding: 20px;
  background-color: ${props => props.palette.background};

  .color-example-primary {
    font-size: 48px;
    font-weight: bold;
    color: ${props => props.palette.primary};
  }

  .color-example-font-secondary {
    color: ${props => props.palette.fontSecondary};
    font-size: 24px;
  }

  .color-example-accent-dark {
    color: ${props => props.palette.accentDark};
    font-size: 24px;
  }

  .color-example-font-primary {
    color: ${props => props.palette.fontPrimary};
  }
  .title {
    font-weight: bold;
    font-size: 36px;
    margin-top: 40px;
  }

  .text {
    display: inline-block;
    width: 65%;
    padding-right: 25px;
    text-align: justify;
  }

  .info-box {
    margin-top: 40px;
    display: inline-block;
    width: 35%;
    padding: 20px 25px;
    vertical-align: top;
    background-color: ${props => props.palette.accentLight};

    .info-box-title {
      text-align: center;
      font-weight: bold;
      font-size: 24px;
    }
    
    p {
      color: ${props => props.palette.fontPrimary};
      font-weight: bold;
    }
  }
`;

const ColorExample = ({ palette }) => {
  return (
    <StyledComponent palette={palette}>
      <div className="color-example-primary">
        Primary color for important information.
      </div>
      <div className="color-example-font-secondary">
        Secondary font for subtitles and notes.
      </div>
      <div className="text">
        <div className="color-example-font-primary title">
          PRIMARY FONT FOR HEADINGS
        </div>
        <p className="color-example-font-primary">
          And for longs texts... At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </p>
      </div>

      <div className="info-box">
        <div className="color-example-accent-dark info-box-title">
          Highlight secondary stuff with accent colors
        </div>
        <p>And keep the primary font for texts. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

    </StyledComponent>
  );
}

export default ColorExample;