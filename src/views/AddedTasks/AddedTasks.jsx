import React from 'react';
import AddedTask from '../../components/TaskPreview/AddedTask';
import { GeneralInfoSection, H2, GeneralInfoH1 } from '../Styled';
import { TaskListSection } from './StyledAddedTasks';

export default props => {
    const { isThisProfileTask } = props; 

    return (
        <>
            {!isThisProfileTask &&
            <GeneralInfoSection>
                <div>
                    <GeneralInfoH1>Zadania</GeneralInfoH1>
                    <H2>Aktywne: 100</H2>
                    {/* <p>Firmy: 100</p> */}
                </div>
            </GeneralInfoSection>
            }
            <TaskListSection>
                <AddedTask isThisProfileTask={isThisProfileTask}/>
                <AddedTask isThisProfileTask={isThisProfileTask}/>
                <AddedTask isThisProfileTask={isThisProfileTask}/>
            </TaskListSection>
        </>
    )
};
