import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { TaskWrapperDiv, TaskIntroDiv, StyledIcon, TaskIntroSubDiv, H3, Img, TaskSummaryDiv, TaskSummarySubDiv, TaskBottomDiv, P, Button } from './StyledTaskPreview';

export default props => {
    const { isThisProfileTask } = props; 

    return (
        <TaskWrapperDiv>
            <TaskIntroDiv>
                <div><StyledIcon icon={faTasks} /></div>
                <TaskIntroSubDiv notLiNested>
                    <H3>Sortowanie bąbelkowe</H3>
                    <div className="required-programming-languages">Dowolny język programowania</div>
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
                    <Button className="task-link">Zobacz <FontAwesomeIcon icon={faTasks} /> </Button>
                </Link>
            </TaskBottomDiv>
        </TaskWrapperDiv>
    )
}
