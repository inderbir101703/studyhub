import styled, {css} from 'styled-components';

const INPUT= styled.input`
-webkit-appearance: none;
    margin: 15px 0;
    width: 100%;

   
     
    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 2.8px;
      border-radius: 21px;
      cursor: pointer;
      background:${(props) => {
        try {
            return props.theme.colors.lightGreyColor;
        } catch {
            return null;
        }
     }};
      border: none;
    }
    &::-webkit-slider-thumb {
      height: 10px;
      width: 10px;
      border-radius: 7px;
      background: ${(props) => {
        try {
            return props.theme.colors.blackColor;
        } catch {
            return null;
        }
     }};
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -3.5px;
    }

    &::-ms-fill-lower {
      background-color: ${(props) => {
        try {
            return props.theme.colors.blackColor;
        } catch {
            return null;
        }
     }}; 
    }
   
 


`;

export default  INPUT;