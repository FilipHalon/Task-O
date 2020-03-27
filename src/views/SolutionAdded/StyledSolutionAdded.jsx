import styled from "styled-components";

export const MessageWrapperDiv = styled.div`
    margin: 2em 4em;
`;

export const MessageContentDiv = styled.div`
    display: flex;
    background: ${props => props.theme.buttonBlue};
    color: ${props => props.theme.primaryLightColor};
`;

export const MessageContentSubDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: .6em;
`;

export const P = styled.p`
    margin: 0;
    padding: .3rem;
`;

export const StatusDiv = styled.div`
    padding: .6em;
    background: ${props => props.theme.buttonBlue};
    color: ${props => props.theme.primaryLightColor};
    text-align: center;
`;
