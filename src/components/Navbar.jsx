import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTasks, faComments, faCommentDots, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import Taskoala from '../assets/taskoala.png';

export default props => {
    const isLogged = props.isLogged === "logged";

    return (
        <header>
            <nav>
                <ul>
                    <div className="navbar-options">
                        <li>
                            <Link to="/">
                                <img src={Taskoala} alt="taskoala" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/tasks">
                                <FontAwesomeIcon icon={faTasks} /> Zadania
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FontAwesomeIcon icon={faCommentDots} /> Pytania
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FontAwesomeIcon icon={faComments} /> Rozmowy
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FontAwesomeIcon icon={faCog} /> Ustawienia
                            </Link>
                        </li>
                    </div>
                    <div className="navbar-auth">
                        {isLogged ?
                        <li>
                            <Link to="/profile">
                                User name
                            </Link>
                        </li>:
                        <React.Fragment>
                            <li>
                                <Link to="/login">
                                    <FontAwesomeIcon icon={faUser} /> Zaloguj się
                                </Link>
                            </li>
                            <li>
                                <Link to="/register">
                                    <FontAwesomeIcon icon={faUserPlus} /> Zarejestruj się
                                </Link>
                            </li>
                        </React.Fragment>
                        }
                    </div>
                </ul>
            </nav>
        </header>
    )
}
