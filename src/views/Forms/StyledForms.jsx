import styled, { css } from "styled-components";
import { ButtonTemplate } from "../Styled";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const AuthForm = styled(Form)`
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

export const AuthInput = styled.input`
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

export const AuthButton = styled.button`
    ${ButtonTemplate}
    ${FormElementTemplate}
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

export const SignUpToInButton = styled(AuthButton)`
    background-color: transparent;
    color: ${props => props.theme.buttonGray};
    font-size: .8em;

    &:hover {
        color: ${props => props.theme.buttonGrayHover};
    }
`;

export const InputSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1em transparent;
`;

const ContentAddFormElementTemplate = css`
    ${FormElementTemplate}
    padding: 1em;
    margin-bottom: 1em;
    box-shadow: ${props => props.theme.primaryBoxShadow};
`;

export const ContentAddInput = styled.input`
    ${ContentAddFormElementTemplate}
    width: 90%;
`;

export const Textarea = styled.textarea`
    ${ContentAddFormElementTemplate}
    height: initial;
    width: 90%;
`;

export const BottomSection = styled.section`
    align-self: center;
`;

export const ContentAddButton = styled(LoginButton)`
    margin: 1em;
    margin-top: 0;
    height: 45px;
`;
