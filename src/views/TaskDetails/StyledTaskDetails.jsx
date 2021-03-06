import styled from "styled-components";

export const ProgrammingLangDiv = styled.div`
    display: flex;
    align-items: center;
    height: 3.5em;
    padding: 0 15px;
    font-size: 90%;
    border-bottom: ${props => props.theme.taskSidebarBorder};
`;

export const TaskDescSection = styled.section`
    padding: 15px;
    background: ${props => props.isSummary && props.theme.secondaryLightColor};
`;

export const ActionSection = styled.section`
    display: flex;
    height: 3.5em;
    padding: 1em;
    border-radius: 4px;
`;

export const ActionDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-shadow: ${props => props.theme.primaryBoxShadow};
    border-radius: 4px;
`;

export const LeftActionDiv = styled(ActionDiv)`
    background: ${props => props.theme.buttonBlue};
    color: ${props => props.theme.primaryLightColor};
    font-size: 90%;

    @media (min-width: 340px) {
        font-size: 100%;
    }
`;
