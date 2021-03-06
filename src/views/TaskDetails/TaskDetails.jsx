import React from 'react';
import { faLightbulb, faCloudUploadAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { GeneralInfoSection, H2, Img, Article, HeadingSection, StyledIcon, H3, ProgrammingLangP, TaskDetailsStyledUploadIcon, GeneralInfoH1 } from '../Styled';
import { ProgrammingLangDiv, TaskDescSection, ActionSection, ActionDiv, LeftActionDiv } from './StyledTaskDetails';

export default () => {
    return (
        <>
            <GeneralInfoSection>
                <div>
                    <GeneralInfoH1>Implementacja algorytmu sortowania</GeneralInfoH1>
                    <H2>Uniwersytet im. Adama Mickiewicza</H2>
                </div>
                <div>
                    <Img src="" alt="" />
                </div>
            </GeneralInfoSection>
            <Article>
                <HeadingSection>
                    <StyledIcon icon={faLightbulb} />
                    <H3>Opis zadania</H3>
                    {/* <div>
                        <span><FontAwesomeIcon icon={faCommentAlt} /></span>
                        <span>100%</span>
                    </div>
                    <div>
                        <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                        <span>1000</span>
                    </div> */}
                </HeadingSection>
                <ProgrammingLangDiv>
                    {/* <div>
                        <span>Limit pamięci</span>
                        <span>1024 MB</span>
                    </div> */}
                    <ProgrammingLangP>Dowolny język programowania</ProgrammingLangP>
                </ProgrammingLangDiv>
                <TaskDescSection isSummary>
                    <p>Twoim zadaniem będzie posortowanie ciągu liczb całkowitych. Jednakże nie podajemy ograniczenia na liczbę elementów tego ciągu. Napisz program, który będzie wczytywał liczby ze standardowego wejścia, tak długo, aż wczytaną liczbą będzie 0 oraz wypisze wszystkie wczytane liczby w porządku niemalejącym.</p>
                </TaskDescSection>
                <ActionSection>
                    <LeftActionDiv>Możliwe akcje</LeftActionDiv>
                    <ActionDiv>
                        <Link to="/new-solution-add">
                            <TaskDetailsStyledUploadIcon icon={faCloudUploadAlt} />
                        </Link>
                        <Link to="/new-solution-add">
                            <TaskDetailsStyledUploadIcon icon={faPaperPlane} />
                        </Link>
                    </ActionDiv>
                </ActionSection>
                <TaskDescSection>
                    <H3>Szczegóły zadania</H3>
                    <div>
                        <p>Napisz program, który: wczyta ze standardowego ciąg liczb całkowitych nieujemnych zakończony liczbą 0, wypisze wszystkie wszystkie liczby z tego ciągu (wraz z końcowym zerem) w porządku niemalejącym.</p>
                        <p>Wejście zawiera pewną ilość liczb całkowitych nieujemnych, nie większych niż 10. Każda z tych liczb zapisana będzie w osobnym wierszu. W ostatnim wierszu zapisana będzie liczba 0. Możesz założyć, że liczba 0 nie pojawi się nigdzie wcześniej wśród podanych elementów.</p>
                        <p>Wyjście Twojego programu powinno stanowić dokładnie tyle samo wierszy, ile liczb było na standardowym wejściu. Liczby te muszą być wypisane w porządku niemalejącym.</p>
                    </div>
                </TaskDescSection>
            </Article>
        </>
    )
};
