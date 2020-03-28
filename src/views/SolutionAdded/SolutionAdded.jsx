import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCheck, faLongArrowAltRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { GeneralInfoSection, H2, Img, ContentWrapperDiv, HeadingSection, StyledIcon, H3, SolutionButtonDiv, SolutionButton, GeneralInfoH1 } from '../Styled';
import { MessageWrapperDiv, MessageContentDiv, MessageContentSubDiv, P, StatusDiv } from './StyledSolutionAdded';

export default () => {
    return(
        <>
            <GeneralInfoSection>
                <div>
                    <GeneralInfoH1>Implementacja algorytmu sortowania</GeneralInfoH1>
                    <H2>Uniwersytet im. Adama Mickiewicza</H2>
                </div>
                <div>
                    <Img src="/UAM-logo-siw-amu.jpg" alt="" />
                </div>
            </GeneralInfoSection>
            <ContentWrapperDiv>
                <HeadingSection>
                    <StyledIcon icon={faLightbulb} />
                    <H3>Zgłaszanie rozwiązania</H3>
                </HeadingSection>
                <div className="solution-add-area">
                    <MessageWrapperDiv>
                        <MessageContentDiv>
                            <MessageContentSubDiv><FontAwesomeIcon icon={faLightbulb} /></MessageContentSubDiv>
                            <MessageContentSubDiv>
                                <P>Twoje rozwiązanie trafiło do skrzynki Microsoft Polska Inc.</P>
                                <P><FontAwesomeIcon icon={faLongArrowAltRight} /> Wysłanych rozwiązań: 1</P>
                            </MessageContentSubDiv>
                        </MessageContentDiv>
                        <SolutionButtonDiv>
                            <SolutionButton><FontAwesomeIcon icon={faPaperPlane} /> Wyślij wiadomość</SolutionButton>
                        </SolutionButtonDiv>
                    </MessageWrapperDiv>
                    <StatusDiv>
                        <P><FontAwesomeIcon icon={faCheck} /> Rozwiązanie wysłano pomyślnie</P>
                    </StatusDiv>
                </div>
            </ContentWrapperDiv>
        </>
    )
};
