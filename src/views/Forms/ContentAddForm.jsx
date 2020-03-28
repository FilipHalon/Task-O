import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { Article, HeadingSection, StyledIcon, H3 } from '../Styled';
import { Form, InputSection, Textarea, ContentAddInput, BottomSection, ContentAddButton } from './StyledForms';

export default props => {
    const { isNewSolution } = props;

    return(
        <>
            <Article>
                <HeadingSection>
                    <StyledIcon icon={faLightbulb} />
                    <H3 as="h1">Dodawanie {isNewSolution ? "rozwiązania" : "zadania"}</H3>
                </HeadingSection>
                <Form>
                    <InputSection>
                    {isNewSolution ?
                        <ContentAddInput type="file"/>
                    :
                    <>
                        <Textarea type="text" name="summary" rows="4" cols="90" placeholder="Podaj streszczenie zadania"/>
                        <ContentAddInput type="text" name="programming-lang" placeholder="Wybierz język programowania"/>
                        <Textarea type="text" name="details" rows="8" cols="90" placeholder="Podaj szczegóły zadania"/>
                    </>
                    }
                    <BottomSection>
                        <ContentAddButton type="submit"><FontAwesomeIcon icon={faCloudUploadAlt} /> Publikuj</ContentAddButton>
                    </BottomSection>
                    </InputSection>
                </Form>
            </Article>
        </>
    )
};
