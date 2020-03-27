import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { TaskIntroSection, StyledIcon, TaskIntroDiv, Img, TaskSummaryP, TaskBottomSection, BottomP, BottomButton, Article, TaskSummarySection, ListH3 } from './StyledTaskPreview';
import { ProgrammingLangP, SolutionButtonDiv, SolutionButton } from '../../views/Styled';

export default props => {
    const { isThisProfileTask } = props; 

    return (
        <Article>
            <TaskIntroSection>
                <StyledIcon icon={faTasks} />
                <TaskIntroDiv notLiNested>
                    <ListH3>Sortowanie bąbelkowe</ListH3>
                    <ProgrammingLangP>Dowolny język programowania</ProgrammingLangP>
                </TaskIntroDiv>
                <div><Img src="" alt="" /></div>
            </TaskIntroSection>
            <TaskSummarySection>
                {isThisProfileTask ?
                <TaskSummaryP>
                    Autor rozwiązania: Jan Kowalski
                </TaskSummaryP>
                :
                <TaskSummaryP>
                    Twoim zadaniem będzie posortowanie ciągu liczb całkowitych. Jednakże nie podajemy ograniczenia na liczbę elementów tego ciągu. 
                </TaskSummaryP>
                }
            </TaskSummarySection>
            {isThisProfileTask &&
            <SolutionButtonDiv>
                <SolutionButton><FontAwesomeIcon icon={faPaperPlane} /> Wyślij wiadomość</SolutionButton>
            </SolutionButtonDiv>
            }
            <TaskBottomSection>
                <BottomP>1 godzinę temu</BottomP>
                <Link to="/task-details">
                    <BottomButton>Zobacz <FontAwesomeIcon icon={faTasks} /> </BottomButton>
                </Link>
            </TaskBottomSection>
        </Article>
    )
};
