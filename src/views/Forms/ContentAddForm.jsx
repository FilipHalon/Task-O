import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { ContentWrapperDiv, HeadingDiv, StyledIcon, H3 } from '../Styled';
import { Form, InputDiv, Textarea, ContentAddInput, BottomDiv, ContentAddButton } from './StyledForms';

export default props => {
    const { isNewSolution } = props;

    return(
        <>
            <ContentWrapperDiv>
                <HeadingDiv>
                    <StyledIcon icon={faLightbulb} />
                    <H3>Dodawanie {isNewSolution ? "rozwiązania" : "zadania"}</H3>
                </HeadingDiv>
                <Form>
                    <InputDiv>
                    {isNewSolution ?
                        <ContentAddInput type="file"/>
                    :
                    <>
                    {/* + */}
                        <Textarea type="text" rows="4" cols="90" placeholder="Podaj streszczenie zadania"/>
                        <ContentAddInput type="text" placeholder="Wybierz język programowania"/>
                        <Textarea type="text" rows="8" cols="90" placeholder="Podaj szczegóły zadania"/>
                    </>
                    }
                    <BottomDiv>
                        <ContentAddButton type="submit"><FontAwesomeIcon icon={faCloudUploadAlt} /> Publikuj</ContentAddButton>
                    </BottomDiv>
                    </InputDiv>
                </Form>
            </ContentWrapperDiv>
        </>
    )
};
