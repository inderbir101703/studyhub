import { css } from 'styled-components'


export const StyledCheckbox = css`

    .check {
        border: 1px solid ${(props) => {
            try {
                return props.theme.colors.darkGreyColor;
            } catch {
                return null;
            }
         }};
        border-radius: 2px;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 17px;
        height: 17px;
        cursor: pointer;
        position: relative;
        top: 5px;
        margin-right: 5px;
        &:checked {
            background-color: ${(props) => {
                try{
                    return props.theme.colors.darkPurpleColor
                }catch{
                    return '';
                } }};
            background: #373D8D url("data:image/gif;base64,R0lGODlhCwAKAIABAP////3cnSH5BAEKAAEALAAAAAALAAoAAAIUjH+AC73WHIsw0UCjglraO20PNhYAOw==") 1.5px 2.5px no-repeat;
        }
    }
    .checklabel {
        color: ${props => {
        switch (props.varient) {
            case 'primary':
                try{
                    return props.theme.colors.darkGreyColor
                }catch{
                    return '';
                }

            default:
                try{
                    return props.theme.colors.blackColor
                }catch{
                    return '';
                }
            }
        }}
    }`;


