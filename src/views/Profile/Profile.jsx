import React from 'react';
import { Link } from 'react-router-dom';
import { faTasks, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Div, Span, StyledIcon } from './StyledProfile';

export default props => {
    const { isDeveloperAccount } = props

    return (
        <div className="task-area">
            <Link to="/tasks">
                <Div><Span><StyledIcon icon={faSearch} /></Span><Span>Przeglądaj zadania</Span></Div>
            </Link>
            {!isDeveloperAccount &&
            <Link to="/new-task-add">
                <Div><Span><StyledIcon icon={faTasks} /></Span><Span>Dodaj zadanie</Span></Div>
            </Link>
            }
            <Link to="/">
                <Div><Span><StyledIcon icon={faSearch} /></Span><Span>Zobacz rozwiązania</Span></Div>
            </Link>
            {!isDeveloperAccount && 
            <Link to="/this-profile-tasks">
                <Div><Span><StyledIcon icon={faSearch} /></Span><Span>Zobacz wstawione zadania</Span></Div>
            </Link>
            }
        </div>
    )
};
