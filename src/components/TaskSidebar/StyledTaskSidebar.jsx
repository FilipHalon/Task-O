import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Aside = styled.aside`
    display: none;
    position: absolute;
    min-height: 100%;
    border: ${props => props.theme.taskSidebarBorder};
    background: ${props => props.theme.secondaryLightColor};
    max-width: 30%;

    @media (min-width: 650px) {
          display: initial;
          position: static;
    }
`;

export const Div = styled.div`
    display: flex;
    align-items: center;
    height: ${props => props.isSearchArea ? "3.5em" : "2.5em"};
    border-bottom: ${props => props.theme.taskSidebarBorder};
    padding-left: 15px;
    background: ${props => props.theme.primaryLightColor};
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    padding-right: 5px;
`

export const Input = styled.input`
    padding-left: .5em;
    border: none;
    height: 2em;
    width: 140px;
    font-size: 90%;

    @media (min-width: 750px) {
        width: auto;
    }
`;

export const H2 = styled.h2`
    font-weight: bold;
    font-size: .95em;
`;

export const Ul = styled.ul`
    margin: 0;
    padding: 0;
    background: ${props => props.theme.primaryLightColor};
`;

export const Li = styled.li`
    padding: 10px;
    border-bottom: ${props => props.theme.taskSidebarBorder};
`;
