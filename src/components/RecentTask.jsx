import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faCloud } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default () => {
    return (
        <div className="recent-task">
            <span><FontAwesomeIcon icon={faTasks} /></span>
            <Link to="/task-details">
                <span className="recent-task-description">
                    <span>Sortowanie bąbelkowe</span>
                    <span>Napisać algorytm sortowania bąbelkowego z implementacją…</span>
                </span>
            </Link>
            <Link to="/new-solution-add">
                <span><FontAwesomeIcon icon={faCloud} /></span>
            </Link>
        </div>
    )
}
