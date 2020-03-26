import React from 'react';
import { faTasks, faCloud } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { TaskIntroDiv, TaskIntroSubDiv, H3, StyledIcon } from './StyledTaskPreview';
import { StyledUploadIcon } from '../../views/Styled';


export default () => {
    return (
        <TaskIntroDiv>
            <StyledIcon icon={faTasks} />
            <Link to="/task-details">
                <TaskIntroSubDiv>
                    <H3>Sortowanie bąbelkowe</H3>
                    <p>Napisać algorytm sortowania bąbelkowego z implementacją…</p>
                </TaskIntroSubDiv>
            </Link>
            <Link to="/new-solution-add">
                <StyledUploadIcon icon={faCloud} />
            </Link>
        </TaskIntroDiv>
    )
}
