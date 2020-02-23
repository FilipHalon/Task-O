import React from 'react';
import SignInField from '../components/SignInField';
import { Link } from 'react-router-dom';


export default () => (        
        <div className="page-content-center">
            <h1>Rejestracja do systemu Task-O!</h1>
            <div className="login-areas">
                <Link to="/register">
                    <SignInField accountType="developer"/>
                </Link>
                <Link to="/register">
                    <SignInField accountType="company"/>
                </Link>
            </div>
        </div>
    );
