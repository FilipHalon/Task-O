import React from 'react';
import SignInField from '../../components/SignInField/SignInField';
import { Link } from 'react-router-dom';
import { H1, CenteredContentSection } from '../Styled';
import { LoginFormChoiceSection } from './StyledSignInPage';


export default () => (        
        <CenteredContentSection>
            <H1>Rejestracja do systemu Task-O!</H1>
            <LoginFormChoiceSection>
                <Link to={{pathname: "/register", state: {isDeveloperAccount: true}}}>
                    <SignInField isDeveloperAccount/>
                </Link>
                <Link to="/register">
                    <SignInField />
                </Link>
            </LoginFormChoiceSection>
        </CenteredContentSection>
    );
