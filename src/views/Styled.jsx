import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Main = styled.main`
    display: flex;
    min-height: 100%;
    background: ${props => props.theme.mainBackgroundColor};
`;

export const ContentCenteredSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    width: 100%;
`;

export const H1 = styled.h1`
    font-size: 1.4rem;
    text-align: center;
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

export const ContentWrapperDiv = styled.div`
    background: ${props => props.theme.primaryLightColor};
    border-radius: 4px;
`;

export const HeadingDiv = styled.div`
    display: flex;
    align-items: center;
    border-bottom: ${props => props.theme.taskSidebarBorder};
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    padding: 15px;
    font-size: 120%;
    color: ${props => props.theme.iconPrimaryColor};
`;

export const ProgrammingLangSpan = styled.span`
    padding: 1%;
    border-radius: 10px;
    width: 100%;
    background-color: ${props => props.theme.programmingLangBackgroundColor};
    color: ${props => props.theme.programmingLangTextColor};
`;

export const StyledUploadIcon = styled(FontAwesomeIcon)`
    color: ${props => props.theme.iconPrimaryColor};
    transition: .4s;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.buttonOrangeHover};
    }
`;

export const TaskDetailsStyledUploadIcon = styled(StyledUploadIcon)`
    margin: 15px;
`;

export const H3 = styled.h3`
    font-size: 100%;
    margin-top: ${props => props.isBetweenDivs && "0"};
`;
