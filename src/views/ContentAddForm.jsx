import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { TaskWrapperDiv, TaskHeadingDiv, StyledIcon, H3 } from './Styled';

export default props => {
    const { isNewSolution } = props;

    return(
        <>
            <TaskWrapperDiv>
                <TaskHeadingDiv>
                    <StyledIcon icon={faLightbulb} />
                    <H3>Dodawanie {isNewSolution ? "rozwiązania" : "zadania"}</H3>
                </TaskHeadingDiv>
                <form className="solution-add-area">
                    {isNewSolution ?
                    <div className="input-area">
                        <input type="file"/>
                    </div>
                    :
                    <div className="input-area">
                        <textarea type="text" rows="4" cols="90" placeholder="Podaj streszczenie zadania"/>
                        <input type="text" placeholder="Wybierz język programowania"/>
                        <textarea type="text" rows="8" cols="90" placeholder="Podaj szczegóły zadania"/>
                    </div>
                    }
                    <div>
                        <button type="submit"><FontAwesomeIcon icon={faCloudUploadAlt} /> Publikuj</button>
                    </div>
                </form>
            </TaskWrapperDiv>
        </>
    )
};
