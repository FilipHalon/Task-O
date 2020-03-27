import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonTemplate } from "../../views/Styled";

export const Article = styled.article`
    border-radius: 4px;
    background-color: ${props => props.theme.primaryLightColor};
    font-size: 90%;
`;

export const TaskIntroSection = styled.section`
    display: flex;
    padding: .5rem;
    border-bottom: ${props => props.notLiNested && props.theme.taskSidebarBorder};
    font-size: 90%;
`;

export const TaskIntroDiv = styled.div`
    padding: 5px;
    padding-top: 0;
    color: ${props => props.theme.iconPrimaryColor};
    transition: .4s;

    &:hover {
        color: ${props => props.theme.fontInitalColor};
    }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    padding-top: 2px;
    color: ${props => props.theme.buttonOrangeHover};
`;

export const SidebarH3 = styled.h3`
    margin: 0;
    margin-bottom: .5em;
    font-size: 105%;
`;

export const ListH3 = styled(SidebarH3)`
    color: initial;
    font-size: 117%;
`;

export const Img = styled.image`
    width: 2em;
`;

export const TaskSummarySection = styled.section`
    background-color: ${props => props.theme.secondaryLightColor};
`;

export const TaskSummaryP = styled.p`
    display: inline-block;
    margin: 1em;
    padding: .5em;
    background-color: ${props => props.theme.primaryLightColor};
    border-radius: 4px;
`;

export const TaskBottomSection = styled.section`
    display: flex;
    justify-content: space-between;
    padding: .5rem;
`;

export const BottomP = styled.p`
    margin: 0;
    padding: .5rem;
    color: ${props => props.theme.fontBlurredColor};
`;

export const BottomButton = styled.button`
    ${ButtonTemplate}
    padding: .5rem;
    color: ${props => props.theme.primaryLightColor};
    background-color: ${props => props.theme.buttonBlue};

    &:hover {
        background-color: ${props => props.theme.buttonBlueHover};
    }
`;
