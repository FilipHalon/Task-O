import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

export default props => {
    const isDeveloperAccount = useLocation().state ? useLocation().state.isDeveloperAccount : false;
    const { isEnterCodeStage, isRegisterForm } = props;
    const isDeveloperIcon = <span>{isDeveloperAccount ? <FontAwesomeIcon icon={faUser} /> : <FontAwesomeIcon icon={faBuilding} /> }</span>
    const lockIcon = <span><FontAwesomeIcon icon={faLock} /></span>
    const createSignInUpForm = () => (
        <>
            {isRegisterForm && 
            <li>
                {isDeveloperIcon}
                <input type="text" placeholder={isDeveloperAccount ? "Podaj imię" : "Podaj nazwę firmy"} />
            </li>
            }
            {
            isRegisterForm &&
            <li>
                {isDeveloperIcon}
                <input type="text" placeholder={isDeveloperAccount ? "Podaj nazwisko" : "Podaj numer NIP"}/>
            </li>
            }
            <li>
                {isDeveloperIcon}
                <input type="email" placeholder="Podaj adres e-mail" />
            </li>
            <li>
                {lockIcon}
                <input type="password" placeholder="Podaj hasło" />
            </li>
            {
            isRegisterForm &&
            <li>
                {lockIcon}
                <input type="password" placeholder="Powtórz hasło" />
            </li>
            }
        </>
    );

    return (
        <div className="page-content-center">
            {isRegisterForm ? 
            <h1>Rejestracja konta {isDeveloperAccount ? 'programisty' : 'firmy'} do systemu Task-O!</h1> : 
            <h1>Logowanie do systemu Task-O!</h1>}
            <form className="auth-form">
                <ul>
                    {isEnterCodeStage ?
                        <li>
                            <span><FontAwesomeIcon icon={faLock} /></span>
                            <input type="text" placeholder="Wprowadź kod autoryzacyjny" />
                        </li>
                        : 
                        createSignInUpForm()
                    }
                </ul>
                {isEnterCodeStage ?
                <button type="submit" className="enter-code-stage-button">Zatwierdź</button> : 
                <button type="submit" className={isRegisterForm ? "register-button" : "login-button"}>{isRegisterForm ? "Zarejestruj się" : "Zaloguj się"}</button>
                }
                <Link to={isRegisterForm ? "/login" : "/register"}>
                    <button>{isRegisterForm ? "Zaloguj się" : "Zarejestruj się"}</button>
                </Link>
            </form>
        </div>
    )
}