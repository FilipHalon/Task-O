import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Div, P } from './StyledSignInField';

export default props => {
    const { isDeveloperAccount } = props

    return (
        <Div isDeveloperAccount = {isDeveloperAccount}>
            <P>Utwórz konto {isDeveloperAccount ? 'programisty' : 'firmy'}</P>
            <P isIconWrapper>{isDeveloperAccount ? <FontAwesomeIcon icon={faUserCheck} /> : <FontAwesomeIcon icon={faBuilding} />}</P>
        </Div>
    )
};
