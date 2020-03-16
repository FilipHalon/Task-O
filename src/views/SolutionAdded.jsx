import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCheck, faLongArrowAltRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default () => {
    return(
        <>
            <div className="task-general-info">
                <div>
                    <h2>Implementacja algorytmu sortowania</h2>
                    <h2>Uniwersytet im. Adama Mickiewicza</h2>
                </div>
                <div>
                    <img src="/UAM-logo-siw-amu.jpg" alt="" />
                </div>
            </div>
            <div className="task-border">
                <div className="task-description-heading">
                    <FontAwesomeIcon icon={faLightbulb} />
                    <span>Zgłaszanie rozwiązania</span>
                </div>
                <div className="solution-add-area">
                    <div className="solution-add-message">
                        <div className="solution-add-message-top">
                            <div><FontAwesomeIcon icon={faLightbulb} /></div>
                            <div>
                                <span>Twoje rozwiązanie trafiło do skrzynki Microsoft Polska Inc.</span>
                                <span><FontAwesomeIcon icon={faLongArrowAltRight} /> Wysłanych rozwiązań: 1</span>
                            </div>
                        </div>
                        <div className="solution-add-message-bottom">
                            <button><FontAwesomeIcon icon={faPaperPlane} /> Wyślij wiadomość</button>
                        </div>
                    </div>
                    <div className="solution-add-status">
                        <FontAwesomeIcon icon={faCheck} />
                        <span> Rozwiązanie wysłano pomyślnie</span>
                    </div>
                </div>
            </div>
        </>
    )
};
