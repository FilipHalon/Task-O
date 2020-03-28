import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCheck, faLongArrowAltRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { GeneralInfoSection, H2, Img, Article, HeadingSection, StyledIcon, H3, SolutionButtonDiv, SolutionButton, GeneralInfoH1 } from '../Styled';
import { MessageSection, MessageContentSection, MessageContentDiv, P, StatusSection } from './StyledSolutionAdded';

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
            <Article>
                <HeadingSection>
                    <StyledIcon icon={faLightbulb} />
                    <H3>Zgłaszanie rozwiązania</H3>
                </HeadingSection>
                <section>
                    <MessageSection>
                        <MessageContentSection>
                            <MessageContentDiv><FontAwesomeIcon icon={faLightbulb} /></MessageContentDiv>
                            <MessageContentDiv>
                                <P>Twoje rozwiązanie trafiło do skrzynki Microsoft Polska Inc.</P>
                                <P><FontAwesomeIcon icon={faLongArrowAltRight} /> Wysłanych rozwiązań: 1</P>
                            </MessageContentDiv>
                        </MessageContentSection>
                        <SolutionButtonDiv>
                            <SolutionButton><FontAwesomeIcon icon={faPaperPlane} /> Wyślij wiadomość</SolutionButton>
                        </SolutionButtonDiv>
                    </MessageSection>
                    <StatusSection>
                        <P><FontAwesomeIcon icon={faCheck} /> Rozwiązanie wysłano pomyślnie</P>
                    </StatusSection>
                </section>
            </Article>
        </>
    )
};
