import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default props => {
    const { isThisProfileTask } = props; 

    return (
        <div className="active-task">
            <div className="recent-task">
                <div><FontAwesomeIcon icon={faTasks} /></div>
                <div className="recent-task-description">
                    <h3>Sortowanie bąbelkowe</h3>
                    <div className="required-programming-languages">Dowolny język programowania</div>
                </div>
                <div><img src="/UAM-logo-siw-amu.jpg" alt="" /></div>
            </div>
            <div className="active-task-summary">
                {isThisProfileTask ?
                <div>
                    Autor rozwiązania: Jan Kowalski
                </div>
                :
                <div>
                    Twoim zadaniem będzie posortowanie ciągu liczb całkowitych. Jednakże nie podajemy ograniczenia na liczbę elementów tego ciągu. 
                </div>
                }
            </div>
            {isThisProfileTask &&
            <div className="solution-add-message-bottom">
                <button><FontAwesomeIcon icon={faPaperPlane} /> Wyślij wiadomość</button>
            </div>
            }
            <div>
                <div>1 godzinę temu</div>
                <Link to="/task-details">
                    <div className="task-link">Zobacz <FontAwesomeIcon icon={faTasks} /> </div>
                </Link>
            </div>
        </div>
    )
}
