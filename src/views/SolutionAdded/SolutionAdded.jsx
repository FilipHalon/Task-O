import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCheck, faLongArrowAltRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { GeneralInfoDiv, H2, Img, ContentWrapperDiv, HeadingDiv, StyledIcon, H3 } from '../Styled';
import { MessageWrapperDiv, MessageContentDiv, MessageContentSubDiv, P, ButtonDiv, Button, StatusDiv } from './StyledSolutionAdded';

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
            <ContentWrapperDiv>
                <HeadingDiv>
                    <StyledIcon icon={faLightbulb} />
                    <H3>Zgłaszanie rozwiązania</H3>
                </HeadingDiv>
                <div className="solution-add-area">
                    <MessageWrapperDiv>
                        <MessageContentDiv>
                            <MessageContentSubDiv><FontAwesomeIcon icon={faLightbulb} /></MessageContentSubDiv>
                            <MessageContentSubDiv>
                                <P>Twoje rozwiązanie trafiło do skrzynki Microsoft Polska Inc.</P>
                                <P><FontAwesomeIcon icon={faLongArrowAltRight} /> Wysłanych rozwiązań: 1</P>
                            </MessageContentSubDiv>
                        </MessageContentDiv>
                        <ButtonDiv>
                            <Button><FontAwesomeIcon icon={faPaperPlane} /> Wyślij wiadomość</Button>
                        </ButtonDiv>
                    </MessageWrapperDiv>
                    <StatusDiv>
                        <P><FontAwesomeIcon icon={faCheck} /> Rozwiązanie wysłano pomyślnie</P>
                    </StatusDiv>
                </div>
            </ContentWrapperDiv>
        </>
    )
};
