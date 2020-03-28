import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    border-radius: 4px;
    box-shadow: ${props => props.theme.primaryBoxShadow};
    background: ${props => props.theme.primaryLightColor};
    font-size: 92%;
    cursor: pointer;
    transition: .4s;
    color: ${props => props.theme.textBlurredColor};

    @media (min-width: 930px) {
        font-size: 110%;
      }
      
      @media (min-width: 1060px) {
        font-size: 120%;
      }
      
      @media (min-width: 800px) {
        height: 200px;
      }

    &:hover {
        background: ${props => props.theme.focusedBackgroundColor};
        color: ${props => props.theme.textInitalColor};
    }

    &:hover svg {
        color: ${props => props.theme.buttonOrangeHover};
    }
`;

const paddingTemplate = css`
    padding-right: .5rem;
    padding-bottom: .5rem;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    ${paddingTemplate}
    font-size: 140%;
    color: ${props => props.theme.buttonOrange};
`;

export const P = styled.p`
    ${paddingTemplate}
    margin: 0;
`;
