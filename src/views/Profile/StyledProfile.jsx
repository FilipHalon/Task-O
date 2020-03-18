import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    border-radius: 4px;
    box-shadow: ${props => props.theme.primaryBoxShadow};
    background-color: ${props => props.theme.primaryLightColor};
    font-size: 92%;
    cursor: pointer;
    transition: .4s;
    color: ${props => props.theme.fontBlurredColor};

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
        background-color: ${props => props.theme.focusedBackgroundColor};
        color: ${props => props.theme.fontInitalColor};
    }

    &:hover svg {
        color: ${props => props.theme.buttonOrangeHover};
    }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 140%;
    color: ${props => props.theme.buttonOrange};
`;

export const Span = styled.span`
    padding-right: .5rem;
    padding-bottom: .5rem;
`;
