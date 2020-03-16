import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
`;

export const StyledUl = styled.ul`
    background-color: #465DEF;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: ${props => props.rightSide ? 'flex-end' : 'initial'}
`;

export const StyledLi = styled.li`
    display: inline-flex;
`;

export const StyledLink = styled(Link)`
    border: ${props => props.logo ? 'none' : 'solid 1em transparent'};
    text-decoration: none;
    color: ${props => props.theme.navbarTextColor};
    font-size: 70%;

    &:hover {
        color: #FFF;
    }

    @media (min-width: 500px) {
        font-size: 80%;
      }
      
    @media (min-width: 800px) {
        font-size: 90%;
      }
`;

export const StyledImage = styled.img`
    width: 4em;
    padding-left: .1em;
    padding-top: .3em;
`;
