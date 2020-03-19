import React from 'react';
import AddedTask from '../components/TaskPreview/AddedTask';
import { GeneralInfoDiv, H2 } from './Styled';

export default props => {
    const { isThisProfileTask } = props; 

    return (
        <>
            {!isThisProfileTask &&
            <GeneralInfoDiv>
                <div>
                    <H2 isPrimary>Zadania</H2>
                    <H2>Aktywne: 100</H2>
                    {/* <p>Firmy: 100</p> */}
                </div>
            </GeneralInfoDiv>
            }
            <div className="task-area">
                <AddedTask isThisProfileTask={isThisProfileTask}/>
                <AddedTask isThisProfileTask={isThisProfileTask}/>
                <AddedTask isThisProfileTask={isThisProfileTask}/>
            </div>
        </>
    )
};
