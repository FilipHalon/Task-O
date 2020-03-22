import styled, { css } from "styled-components";

export const AuthForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 2%;
    width: 90%;
    max-width: 550px;
    color: ${props => props.theme.fontBlurredColor};
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    box-shadow: ${props => props.theme.primaryBoxShadow};
`;

export const Li = styled.li`
    display: flex;
    border-bottom: ${props => props.theme.taskSidebarBorder};
`;

const FormElementTemplate = css`
    border: none;
    height: 54px;
    font-size: 110%;
`;

export const Input = styled.input`
    ${FormElementTemplate}
    width: 100%;
    padding-left: 1.75rem;
`;

export const Span = styled.span`
    ${FormElementTemplate}
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54px;
    border-right: ${props => props.theme.taskSidebarBorder};
`;

export const Textarea = styled.textarea`
    ${FormElementTemplate}
`;

const ButtonTemplate = styled.button`
    ${FormElementTemplate}
    transition: .4s;
    cursor: pointer;
`;

export const AuthButton = styled(ButtonTemplate)`
    border-radius: 4px;
    margin-top: 5%;
    color: ${props => props.theme.primaryLightColor};
`;

export const RegisterButton = styled(AuthButton)`
    background-color: ${props => props.theme.buttonOrange};

    &:hover {
        background-color: ${props => props.theme.buttonOrangeHover}
    }
`;

export const LoginButton = styled(AuthButton)`
    background-color: ${props => props.theme.buttonGreen};

    &:hover {
        background-color: ${props => props.theme.buttonGreenHover}
    }
`;

export const EnterCodeButton = styled(AuthButton)`
    background-color: ${props => props.theme.buttonPurple};

    &:hover {
        background-color: ${props => props.theme.buttonPurpleHover}
    }
`;

export const SignUpToInDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const SignUpToInButton = styled(ButtonTemplate)`
    background-color: transparent;
    color: ${props => props.theme.buttonGray};
    font-size: .8em;

    &:hover {
        color: ${props => props.theme.buttonGrayHover};
    }
`;
