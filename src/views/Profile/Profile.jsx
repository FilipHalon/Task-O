import React from 'react';
import { Link } from 'react-router-dom';
import { faTasks, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Div, P, StyledIcon } from './StyledProfile';
import { TaskListSection } from '../Styled';

export default props => {
    const { isDeveloperAccount } = props

    return (
        <TaskListSection>
            <Link to="/tasks">
                <Div><StyledIcon icon={faSearch} /><P>Przeglądaj zadania</P></Div>
            </Link>
            {!isDeveloperAccount &&
            <Link to="/new-task-add">
                <Div><StyledIcon icon={faTasks} /><P>Dodaj zadanie</P></Div>
            </Link>
            }
            <Link to="/">
                <Div><StyledIcon icon={faSearch} /><P>Zobacz rozwiązania</P></Div>
            </Link>
            {!isDeveloperAccount && 
            <Link to="/this-profile-tasks">
                <Div><StyledIcon icon={faSearch} /><P>Zobacz wstawione zadania</P></Div>
            </Link>
            }
        </TaskListSection>
    )
};
