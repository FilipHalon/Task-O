import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Section = styled.section`
    display: none;
    position: absolute;
    min-height: 100%;
    border: ${props => props.theme.taskSidebarBorder};
    background-color: ${props => props.theme.secondaryLightColor};
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
    background-color: ${props => props.theme.primaryLightColor};
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

export const H3 = styled.h3`
    font-weight: bold;
    font-size: 90%;
`;

export const Ul = styled.ul`
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.primaryLightColor};
`;

export const Li = styled.li`
    padding: 10px;
    border-bottom: ${props => props.theme.taskSidebarBorder};
`;
