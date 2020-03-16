import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTasks, faComments, faCommentDots, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import Taskoala from '../../assets/taskoala.png';
import { Header, Ul, Div, Li, StyledLink, Img } from './StyledNavbar';

export default props => {
    const isLogged = props.isLogged === "logged";

    return (
        <Header>
            <nav>
                <Ul>
                    <Div>
                        <Li>
                            <StyledLink to="/" logo>
                                <Img src={Taskoala} alt="taskoala" />
                            </StyledLink>
                        </Li>
                        <Li>
                            <StyledLink to="/tasks">
                                <FontAwesomeIcon icon={faTasks} /> Zadania
                            </StyledLink>
                        </Li>
                        <Li>
                            <StyledLink to="/">
                                <FontAwesomeIcon icon={faCommentDots} /> Pytania
                            </StyledLink>
                        </Li>
                        <Li>
                            <StyledLink to="/">
                                <FontAwesomeIcon icon={faComments} /> Rozmowy
                            </StyledLink>
                        </Li>
                        <Li>
                            <StyledLink to="/">
                                <FontAwesomeIcon icon={faCog} /> Ustawienia
                            </StyledLink>
                        </Li>
                    </Div>
                    <Div rightSide>
                        {isLogged ?
                        <Li>
                            <StyledLink to="/profile">
                                User name
                            </StyledLink>
                        </Li>:
                        <>
                            <Li>
                                <StyledLink to="/login">
                                    <FontAwesomeIcon icon={faUser} /> Zaloguj się
                                </StyledLink>
                            </Li>
                            <Li>
                                <StyledLink to="/welcome">
                                    <FontAwesomeIcon icon={faUserPlus} /> Zarejestruj się
                                </StyledLink>
                            </Li>
                        </>
                        }
                    </Div>
                </Ul>
            </nav>
        </Header>
    )
}
