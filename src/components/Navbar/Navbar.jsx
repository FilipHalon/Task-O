import React from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTasks, faComments, faCommentDots, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import Taskoala from '../../assets/taskoala.png';
import { StyledHeader, StyledUl, StyledDiv, StyledLi, StyledLink, StyledImage } from './StyledNavbar';

export default props => {
    const isLogged = props.isLogged === "logged";

    return (
        <StyledHeader>
            <nav>
                <StyledUl>
                    <StyledDiv>
                        <StyledLi>
                            <StyledLink to="/" logo>
                                <StyledImage src={Taskoala} alt="taskoala" />
                            </StyledLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledLink to="/tasks">
                                <FontAwesomeIcon icon={faTasks} /> Zadania
                            </StyledLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledLink to="/">
                                <FontAwesomeIcon icon={faCommentDots} /> Pytania
                            </StyledLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledLink to="/">
                                <FontAwesomeIcon icon={faComments} /> Rozmowy
                            </StyledLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledLink to="/">
                                <FontAwesomeIcon icon={faCog} /> Ustawienia
                            </StyledLink>
                        </StyledLi>
                    </StyledDiv>
                    <StyledDiv rightSide>
                        {isLogged ?
                        <StyledLi>
                            <StyledLink to="/profile">
                                User name
                            </StyledLink>
                        </StyledLi>:
                        <>
                            <StyledLi>
                                <StyledLink to="/login">
                                    <FontAwesomeIcon icon={faUser} /> Zaloguj się
                                </StyledLink>
                            </StyledLi>
                            <StyledLi>
                                <StyledLink to="/welcome">
                                    <FontAwesomeIcon icon={faUserPlus} /> Zarejestruj się
                                </StyledLink>
                            </StyledLi>
                        </>
                        }
                    </StyledDiv>
                </StyledUl>
            </nav>
        </StyledHeader>
    )
}
