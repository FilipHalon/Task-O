import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default props => {
    const isEnterCodeStage = props.authStage === "enterCode";
    const isRegisterForm = props.formType === "register";
    const isDeveloperAccount = props.accountType !== "developer";
    const isDeveloperIcon = <span>{isDeveloperAccount ? <FontAwesomeIcon icon={faUser} /> : <FontAwesomeIcon icon={faBuilding} /> }</span>
    const lockIcon = <span><FontAwesomeIcon icon={faLock} /></span>

    return (
        <div className="page-content-center">
            {isRegisterForm ? 
            <h1>Rejestracja konta {isDeveloperAccount ? 'programisty' : 'firmy'} do systemu Task-O!</h1> : 
            <h1>Logowanie do systemu Task-O!</h1>}
            <form className="auth-form">
                {isEnterCodeStage &&
                    <ul>
                        <li>
                            <span><FontAwesomeIcon icon={faLock} /></span>
                            <input type="text" placeholder="Wprowadź kod autoryzacyjny" />
                        </li>
                    </ul>
                }
                {!isEnterCodeStage && 
                    <ul>
                        {
                        isRegisterForm && 
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
                    </ul>
                    }
                {isEnterCodeStage ?
                <button type="submit" className="enter-code-stage-button">Zatwierdź</button> : 
                <button type="submit" className={isRegisterForm ? "register-button" : "login-button"}>{isRegisterForm ? "Zarejestruj się" : "Zaloguj się"}</button>
                }
                <Link href={isRegisterForm ? "/login" : "/register"}>
                    <button>{isRegisterForm ? "Zaloguj się" : "Zarejestruj się"}</button>
                </Link>
            </form>
        </div>
    )
}
