import styled, { css } from "styled-components";
import { buttonTemplate } from "../Styled";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const AuthForm = styled(Form)`
    margin-top: 2%;
    width: 90%;
    max-width: 550px;
    color: ${props => props.theme.textBlurredColor};
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

const formElementTemplate = css`
    border: none;
    height: 54px;
    font-size: 110%;
`;

export const AuthInput = styled.input`
    ${formElementTemplate}
    width: 100%;
    padding-left: 1.75rem;
`;

export const Span = styled.span`
    ${formElementTemplate}
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54px;
    border-right: ${props => props.theme.taskSidebarBorder};
`;

export const AuthButton = styled.button`
    ${buttonTemplate}
    ${formElementTemplate}
    margin-top: 5%;
    color: ${props => props.theme.primaryLightColor};
`;

export const RegisterButton = styled(AuthButton)`
    background: ${props => props.theme.buttonOrange};

    &:hover {
        background: ${props => props.theme.buttonOrangeHover}
    }
`;

export const LoginButton = styled(AuthButton)`
    background: ${props => props.theme.buttonGreen};

    &:hover {
        background: ${props => props.theme.buttonGreenHover}
    }
`;

export const EnterCodeButton = styled(AuthButton)`
    background: ${props => props.theme.buttonPurple};

    &:hover {
        background: ${props => props.theme.buttonPurpleHover}
    }
`;

export const SignUpToInDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const SignUpToInButton = styled(AuthButton)`
    background: transparent;
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

const contentAddformElementTemplate = css`
    ${formElementTemplate}
    padding: 1em;
    margin-bottom: 1em;
    box-shadow: ${props => props.theme.primaryBoxShadow};
    width: 90%;
`;

export const ContentAddInput = styled.input`
    ${contentAddformElementTemplate}
`;

export const Textarea = styled.textarea`
    ${contentAddformElementTemplate}
    height: initial;
`;

export const BottomSection = styled.section`
    align-self: center;
`;

export const ContentAddButton = styled(LoginButton)`
    margin: 1em;
    margin-top: 0;
    height: 45px;
`;
