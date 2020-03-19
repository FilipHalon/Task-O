import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCheck, faLongArrowAltRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { GeneralInfoDiv, H2, Img, TaskWrapperDiv, TaskHeadingDiv, StyledIcon, H3 } from './Styled';

export default () => {
    return(
        <>
            <GeneralInfoDiv>
                <div>
                    <H2 isPrimary>Implementacja algorytmu sortowania</H2>
                    <H2>Uniwersytet im. Adama Mickiewicza</H2>
                </div>
                <div>
                    <Img src="/UAM-logo-siw-amu.jpg" alt="" />
                </div>
            </GeneralInfoDiv>
            <TaskWrapperDiv>
                <TaskHeadingDiv>
                    <StyledIcon icon={faLightbulb} />
                    <H3>Zgłaszanie rozwiązania</H3>
                </TaskHeadingDiv>
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
            </TaskWrapperDiv>
        </>
    )
};
