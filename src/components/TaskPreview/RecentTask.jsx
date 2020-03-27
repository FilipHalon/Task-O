import React from 'react';
import { faTasks, faCloud } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { TaskIntroDiv, StyledIcon, TaskIntroSection, SidebarH3 } from './StyledTaskPreview';
import { StyledUploadIcon } from '../../views/Styled';


export default () => {
    return (
        <TaskIntroSection>
            <StyledIcon icon={faTasks} />
            <Link to="/task-details">
                <TaskIntroDiv>
                    <SidebarH3>Sortowanie bąbelkowe</SidebarH3>
                    <p>Napisać algorytm sortowania bąbelkowego z implementacją…</p>
                </TaskIntroDiv>
            </Link>
            <Link to="/new-solution-add">
                <StyledUploadIcon icon={faCloud} />
            </Link>
        </TaskIntroSection>
    )
};
