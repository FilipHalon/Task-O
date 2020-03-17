import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Div, Span } from './StyledSignInField';

export default props => {
    const { isDeveloperAccount } = props

    return (
        <Div isDeveloperAccount = {isDeveloperAccount}>
            <Span>Utwórz konto {isDeveloperAccount ? 'programisty' : 'firmy'}</Span>
            <Span isIconWrapper>{isDeveloperAccount ? <FontAwesomeIcon icon={faUserCheck} /> : <FontAwesomeIcon icon={faBuilding} />}</Span>
        </Div>
    )
}
