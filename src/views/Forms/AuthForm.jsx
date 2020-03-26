import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { AuthForm, Ul, Li, AuthInput, Span, EnterCodeButton, RegisterButton, LoginButton, SignUpToInButton, SignUpToInDiv } from './StyledForms';

export default props => {
    const isDeveloperAccount = useLocation().state ? useLocation().state.isDeveloperAccount : false;
    const { isEnterCodeStage, isRegisterForm } = props;
    const isDeveloperIcon = <Span>{isDeveloperAccount ? <FontAwesomeIcon icon={faUser} /> : <FontAwesomeIcon icon={faBuilding} /> }</Span>
    const lockIcon = <Span><FontAwesomeIcon icon={faLock} /></Span>
    const createSignInUpForm = () => (
        <>
            {isRegisterForm && 
            <Li>
                {isDeveloperIcon}
                <AuthInput type="text" placeholder={isDeveloperAccount ? "Podaj imię" : "Podaj nazwę firmy"} />
            </Li>
            }
            {
            isRegisterForm &&
            <Li>
                {isDeveloperIcon}
                <AuthInput type="text" placeholder={isDeveloperAccount ? "Podaj nazwisko" : "Podaj numer NIP"}/>
            </Li>
            }
            <Li>
                {isDeveloperIcon}
                <AuthInput type="email" placeholder="Podaj adres e-mail" />
            </Li>
            <Li>
                {lockIcon}
                <AuthInput type="password" placeholder="Podaj hasło" />
            </Li>
            {
            isRegisterForm &&
            <Li>
                {lockIcon}
                <AuthInput type="password" placeholder="Powtórz hasło" />
            </Li>
            }
        </>
    );

    return (
        <div className="page-content-center">
            {isRegisterForm ? 
            <h1>Rejestracja konta {isDeveloperAccount ? 'programisty' : 'firmy'} do systemu Task-O!</h1> : 
            <h1>Logowanie do systemu Task-O!</h1>}
            <AuthForm>
                <Ul>
                    {isEnterCodeStage ?
                        <Li>
                            <Span><FontAwesomeIcon icon={faLock} /></Span>
                            <AuthInput type="text" placeholder="Wprowadź kod autoryzacyjny" />
                        </Li>
                        : 
                        createSignInUpForm()
                    }
                </Ul>
                {isEnterCodeStage ?
                <EnterCodeButton type="submit">Zatwierdź</EnterCodeButton> 
                : 
                    isRegisterForm ? 
                    <RegisterButton type="submit">Zarejestruj się</RegisterButton>
                    :
                    <LoginButton type="submit">Zaloguj się</LoginButton>
                }
                <SignUpToInDiv>
                    <Link to={isRegisterForm ? "/login" : "/welcome"}>
                        <SignUpToInButton>{isRegisterForm ? "Zaloguj się" : "Zarejestruj się"}</SignUpToInButton>
                    </Link>
                </SignUpToInDiv>
            </AuthForm>
        </div>
    )
}
