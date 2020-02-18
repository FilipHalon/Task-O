import React from 'react';
import RegisterFormChoiceField from './components/RegisterFormChoiceField';
import { Link } from 'react-router-dom';


export default () => (        
        <div className="page-content-center">
            <h1>Rejestracja do systemu Task-O!</h1>
            <span className="login-areas">
                <Link to="/">
                    <RegisterFormChoiceField accountType="developer"/>
                </Link>
                <Link to="/">
                    <RegisterFormChoiceField accountType="company"/>
                </Link>
            </span>
        </div>
    );
