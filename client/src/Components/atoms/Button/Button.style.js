import styled from "styled-components";

let newStyle = "";

const ButtonStyle = styled.button`
font-size: 0.9em;
          padding:1em;
          
          ${(props) => {
            switch (props.varient) {
              case "close":
                return `border-radius:50%;
                height:10px;
                width:10px;
                display:flex;
                align-items:center;
                justify-content:center;`;
              default:
                return `border-radius:10px;`;
            }
          }}
  ${(props) => {
    try {
      switch (props.theme.theme) {
        case "dark":
          newStyle = `
        border:2px solid #DAF7A6;
        background-color:	white;
        color:black;

    `;
          break;
        case "light":
          newStyle = `
          border:2px solid #581845;
          background-color:#1B1212	;
          color:white;
    `;
          break;

        default:
          break;
      }
      return newStyle;
    } catch {
      return null;
    }
  }}};

  @media only screen and (max-width: 750px) {
    font-size: 10px;
  }

  &:hover {
    opacity: ${(props) => {
      return "0.8";
    }};
    cursor: pointer;
  }
`;

export { ButtonStyle };
