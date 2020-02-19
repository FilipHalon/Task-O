import React from 'react';
import SignInField from './components/SignInField';
import { Link } from 'react-router-dom';


export default () => (        
        <div className="page-content-center">
            <h1>Rejestracja do systemu Task-O!</h1>
            <span className="login-areas">
                <Link to="/">
                    <SignInField accountType="developer"/>
                </Link>
                <Link to="/">
                    <SignInField accountType="company"/>
                </Link>
            </span>
        </div>
    );
