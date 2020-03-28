import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { AuthForm, Ul, Li, AuthInput, Span, EnterCodeButton, RegisterButton, LoginButton, SignUpToInButton, SignUpToInDiv } from './StyledForms';
import { H1, CenteredContentSection } from '../Styled';

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
                <AuthInput type="text" name="name" placeholder={isDeveloperAccount ? "Podaj imię" : "Podaj nazwę firmy"} />
            </Li>
            }
            {
            isRegisterForm &&
            <Li>
                {isDeveloperIcon}
                <AuthInput type="text" name={isDeveloperAccount ? "surname" : "nip"} placeholder={isDeveloperAccount ? "Podaj nazwisko" : "Podaj numer NIP"}/>
            </Li>
            }
            <Li>
                {isDeveloperIcon}
                <AuthInput type="email" name="email" placeholder="Podaj adres e-mail" />
            </Li>
            <Li>
                {lockIcon}
                <AuthInput type="password" name="password" placeholder="Podaj hasło" />
            </Li>
            {
            isRegisterForm &&
            <Li>
                {lockIcon}
                <AuthInput type="password" name="password-confirm" placeholder="Powtórz hasło" />
            </Li>
            }
        </>
    );

    return (
        <CenteredContentSection>
            <H1>{isRegisterForm ? 
            `Rejestracja konta ${isDeveloperAccount ? 'programisty' : 'firmy'} do systemu Task-O!` : 
            "Logowanie do systemu Task-O!"
            }
            </H1>
            <AuthForm>
                <Ul>
                    {isEnterCodeStage ?
                        <Li>
                            <Span><FontAwesomeIcon icon={faLock} /></Span>
                            <AuthInput type="text" name="code" placeholder="Wprowadź kod autoryzacyjny" />
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
        </CenteredContentSection>
    )
};
