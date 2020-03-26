import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Main = styled.main`
    display: flex;
    min-height: 100%;
    background: ${props => props.theme.mainBackgroundColor};
`;

export const ContentSection = styled.section`
    width: 100%;
    border: solid 2em transparent;
`;

export const ContentDiv = styled.div`
    max-width: 900px;
    line-height: 1.2em;
`;

export const GeneralInfoDiv = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 900px;
`;

export const H2 = styled.h2`
    font-size: ${props => props.isPrimary ? "120%" : "100%"};
    color: ${props => !props.isPrimary && props.theme.fontBlurredColor};
`;

export const Img = styled.img`
    width: 4em;
`;
// +
export const TaskWrapperDiv = styled.div`
    background: ${props => props.theme.primaryLightColor};
    border-radius: 4px;
`;
// +
export const TaskHeadingDiv = styled.div`
    display: flex;
    align-items: center;
    border-bottom: ${props => props.theme.taskSidebarBorder};
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    padding: 15px;
    font-size: 120%;
    color: ${props => props.theme.iconPrimaryColor};
`;

export const ProgrammingLangDiv = styled.div`
    display: flex;
    align-items: center;
    height: 3.5em;
    padding: 0 15px;
    font-size: 90%;
    border-bottom: ${props => props.theme.taskSidebarBorder};
`;

export const ProgrammingLangSpan = styled.span`
    padding: 1%;
    border-radius: 10px;
    width: 100%;
    background-color: ${props => props.theme.programmingLangBackgroundColor};
    color: ${props => props.theme.programmingLangTextColor};
`;

export const TaskDescDiv = styled.div`
    padding: 15px;
    background: ${props => props.isSummary && props.theme.secondaryLightColor};
`;

export const ActionDiv = styled.div`
    display: flex;
    height: 3.5em;
    padding: 2em;
    border-radius: 4px;
`;

export const ActionSubDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-shadow: ${props => props.theme.primaryBoxShadow};
    border-radius: 4px;
`;

export const LeftActionDiv = styled(ActionSubDiv)`
    background: ${props => props.theme.buttonBlue};
    color: ${props => props.theme.primaryLightColor};
    font-size: 90%;

    @media (min-width: 340px) {
        font-size: 100%;
    }
`;
// +
export const StyledUploadIcon = styled(FontAwesomeIcon)`
    margin: 15px;
    color: ${props => props.theme.iconPrimaryColor};
    transition: .4s;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.buttonOrangeHover};
    }
`;

export const H3 = styled.h3`
    font-size: 100%;
    margin-top: ${props => props.isBetweenDivs && "0"};
`;
