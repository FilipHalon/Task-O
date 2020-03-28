import styled from "styled-components";

export const MessageSection = styled.section`
    margin: 2em 4em;
`;

export const MessageContentSection = styled.section`
    display: flex;
    background: ${props => props.theme.buttonBlue};
    color: ${props => props.theme.primaryLightColor};
`;

export const MessageContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: .6em;
`;

export const P = styled.p`
    margin: 0;
    padding: .3rem;
`;

export const StatusSection = styled.section`
    padding: .6em;
    background: ${props => props.theme.buttonBlue};
    color: ${props => props.theme.primaryLightColor};
    text-align: center;
`;
