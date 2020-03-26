import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ContentWrapperDiv, TaskIntroDiv, StyledIcon, TaskIntroSubDiv, H3, Img, TaskSummaryDiv, TaskSummarySubDiv, TaskBottomDiv, P, ButtonDiv } from './StyledTaskPreview';
import { ProgrammingLangSpan } from '../../views/Styled';

export default props => {
    const { isThisProfileTask } = props; 

    return (
        <ContentWrapperDiv>
            <TaskIntroDiv>
                {/* + */}
                <div><StyledIcon icon={faTasks} /></div>
                <TaskIntroSubDiv notLiNested>
                    <H3>Sortowanie bąbelkowe</H3>
                    {/* + */}
                    <ProgrammingLangSpan as="div">Dowolny język programowania</ProgrammingLangSpan>
                </TaskIntroSubDiv>
                <div><Img src="" alt="" /></div>
            </TaskIntroDiv>
            <TaskSummaryDiv>
                {isThisProfileTask ?
                <TaskSummarySubDiv>
                    Autor rozwiązania: Jan Kowalski
                </TaskSummarySubDiv>
                :
                <TaskSummarySubDiv>
                    Twoim zadaniem będzie posortowanie ciągu liczb całkowitych. Jednakże nie podajemy ograniczenia na liczbę elementów tego ciągu. 
                </TaskSummarySubDiv>
                }
            </TaskSummaryDiv>
            {isThisProfileTask &&
            <div className="solution-add-message-bottom">
                <button><FontAwesomeIcon icon={faPaperPlane} /> Wyślij wiadomość</button>
            </div>
            }
            <TaskBottomDiv>
                <P>1 godzinę temu</P>
                <Link to="/task-details">
                    <ButtonDiv className="task-link">Zobacz <FontAwesomeIcon icon={faTasks} /> </ButtonDiv>
                </Link>
            </TaskBottomDiv>
        </ContentWrapperDiv>
    )
}
