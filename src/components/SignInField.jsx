import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faBuilding } from '@fortawesome/free-solid-svg-icons';

export default props => {
    const isDeveloperAccount = props.accountType === "developer"
    return (
        <span className={isDeveloperAccount ? "login-area developer-account" : "login-area company-account"}>
            <span>Utwórz konto {isDeveloperAccount ? 'programisty' : 'firmy'}</span>
            <span className="account-icon">{isDeveloperAccount ? <FontAwesomeIcon icon={faUserCheck} /> : <FontAwesomeIcon icon={faBuilding} />}</span>
        </span>
    )
}
