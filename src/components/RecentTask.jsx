import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faCloud } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default () => {
    return (
        <div className="recent-task">
            <div><FontAwesomeIcon icon={faTasks} /></div>
            <Link to="/task-details">
                <div className="recent-task-description">
                    <h3>Sortowanie bąbelkowe</h3>
                    <p>Napisać algorytm sortowania bąbelkowego z implementacją…</p>
                </div>
            </Link>
            <Link to="/new-solution-add">
                <div><FontAwesomeIcon icon={faCloud} /></div>
            </Link>
        </div>
    )
}
