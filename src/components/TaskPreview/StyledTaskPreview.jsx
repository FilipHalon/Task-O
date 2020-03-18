import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TaskWrapperDiv = styled.div`
    border-radius: 4px;
    background-color: ${props => props.theme.primaryLightColor};
    font-size: 90%;
`;

export const TaskIntroDiv = styled.div`
    display: flex;
    padding: .5rem;
    border-bottom: ${props => props.notLiNested && props.theme.taskSidebarBorder};
    font-size: 90%;
`;

export const TaskIntroSubDiv = styled.div`
    padding: 5px;
    padding-top: 0;
    color: ${props => props.theme.iconPrimaryColor};
    transition: .4s;

    &:hover {
        color: ${props => props.theme.fontInitalColor};
    }
`;

// export const StyledLink = styled(Link)`
//     color: black;
// `;

export const StyledIcon = styled(FontAwesomeIcon)`
    padding-top: 2px;
    color: ${props => props.theme.buttonOrangeHover};
`;

export const H3 = styled.h3`
    margin: 0;
    margin-bottom: .5em;
    font-size: 105%;
`;

export const StyledUploadIcon = styled(FontAwesomeIcon)`
    color: ${props => props.theme.iconPrimaryColor};
    transition: .4s;

    &:hover {
        color: ${props => props.theme.buttonOrangeHover};
    }
`;

export const Img = styled.image`
    width: 2em;
`;

export const TaskSummaryDiv = styled.div`
    background-color: ${props => props.theme.secondaryLightColor};
`;

export const TaskSummarySubDiv = styled.div`
    display: inline-block;
    margin: 1em;
    padding: .5em;
    background-color: ${props => props.theme.primaryLightColor};
    border-radius: 4px;
`;

export const TaskBottomDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .5rem;
`;

export const P = styled.p`
    margin: 0;
    padding: .5rem;
    color: ${props => props.theme.fontBlurredColor};
`;

export const Button = styled.div`
    padding: .5rem;
    border-radius: 4px;
    color: ${props => props.theme.primaryLightColor};
    background-color: ${props => props.theme.buttonBlue};
    cursor: pointer;
    transition: .4s;

    &:hover {
        background-color: ${props => props.theme.buttonBlueHover};
    }
`;
