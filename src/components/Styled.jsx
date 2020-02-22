import styled from 'styled-components';

export const LoggedMain = styled.main`
    display: grid;
    grid: auto / 3fr 7fr;
    background: #E6EBF1;
`;

export const UnloggedMain = styled.main``

export const StyledFooter = styled.footer`
    padding: .5em 0;
    width: 100%;
    color: ${props => props.theme.navbarBackgroundColor};
    text-align: center;
    font-size: 90%;
    font-weight: bold;
`
