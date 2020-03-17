import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1em;
    height: 10em;
    width: 18em;
    max-width: 300px;
    color: #FFF;
    border-radius: 2px;
    cursor: pointer;
    background-color: ${props => props.isDeveloperAccount ? props.theme.buttonBlue : props.theme.buttonOrange };

    &:hover {
        background-color: ${props => props.isDeveloperAccount ? props.theme.buttonBlueHover : props.theme.buttonOrangeHover };
    }
`;

export const Span = styled.span`
    margin: 1rem;
    ${props => props.isIconWrapper && "align-self: flex-end;"}
    ${props => props.isIconWrapper && "font-size: 2em;"}
`;
