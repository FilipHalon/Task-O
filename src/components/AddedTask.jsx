import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default props => {
    const isOwnTask = props.ownTask === "ownTask"; 

    return (
        <div className="active-task">
            <div className="recent-task">
                <span><FontAwesomeIcon icon={faTasks} /></span>
                <span className="recent-task-description">
                    <span>Sortowanie bąbelkowe</span>
                    <span className="required-programming-languages">Dowolny język programowania</span>
                </span>
                <span><image src="/UAM-logo-siw-amu.jpg" alt="" /></span>
            </div>
            <div className="active-task-summary">
                {isOwnTask ?
                <span>
                    Autor rozwiązania: Jan Kowalski
                </span>
                :
                <span>
                    Twoim zadaniem będzie posortowanie ciągu liczb całkowitych. Jednakże nie podajemy ograniczenia na liczbę elementów tego ciągu. Napisz program, który będzie fajny. 
                </span>
                }
            </div>
            {isOwnTask &&
            <div className="solution-add-message-bottom">
                <button><FontAwesomeIcon icon={faPaperPlane} /> Wyślij wiadomość</button>
            </div>
            }
            <div>
                <span>1 godzinę temu</span>
                <Link to="/tasks">
                    <span className="task-link">Zobacz <FontAwesomeIcon icon={faTasks} /> </span>
                </Link>
            </div>
        </div>
    )
}
