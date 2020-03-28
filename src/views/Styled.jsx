import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const buttonTemplate = css`
    border: 0;
    border-radius: 4px;
    transition: .4s;
    cursor: pointer;
`;

export const Main = styled.main`
    display: flex;
    min-height: 100%;
    background: ${props => props.theme.mainBackgroundColor};
`;

export const CenteredContentSection = styled.section`
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

export const GeneralInfoSection = styled.section`
    display: flex;
    justify-content: space-between;
    max-width: 900px;
`;

export const GeneralInfoH1 = styled.h1`
    font-size: 120%;
`;

export const H2 = styled.h2`
    font-size: 100%;
    color: ${props => props.theme.textBlurredColor};
`;

export const Img = styled.img`
    width: 4em;
`;

export const Article = styled.article`
    background: ${props => props.theme.primaryLightColor};
    border-radius: 4px;
`;

export const HeadingSection = styled.section`
    display: flex;
    align-items: center;
    border-bottom: ${props => props.theme.taskSidebarBorder};
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    padding: 15px;
    font-size: 120%;
    color: ${props => props.theme.iconPrimaryColor};
`;

export const ProgrammingLangP = styled.p`
    margin: 0;
    padding: 1%;
    border-radius: 10px;
    width: 100%;
    background: ${props => props.theme.programmingLangBackgroundColor};
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

export const SolutionButtonDiv = styled.div`
    background: ${props => props.theme.buttonBlack};
`;

export const SolutionButton = styled.button`
    ${buttonTemplate}
    padding: .3em;
    margin: .6em 1.6em;
    border: 1px solid ${props => props.theme.iconPrimaryColor};
    background: ${props => props.theme.buttonBlack};
    color: ${props => props.theme.iconPrimaryColor};


    &:hover {
        background: ${props => props.theme.iconPrimaryColor};
        color: ${props => props.theme.buttonBlack};
    }
`;

export const TaskListSection = styled.section`
    display: grid;
    grid: auto / 1fr;
    grid-gap: 2em;

    @media (min-width: 800px) {
        grid: auto / 1fr 1fr;
    }
`;
