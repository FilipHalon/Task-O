import React from 'react';
import AddedTask from '../components/TaskPreview/AddedTask';

export default props => {
    const { isThisProfileTask } = props; 

    return (
        <>
            {!isThisProfileTask &&
            <div className="task-general-info">
                <div>
                    <h2>Zadania</h2>
                    <h2>Aktywne: 100</h2>
                    {/* <p>Firmy: 100</p> */}
                </div>
            </div>
            }
            <div className="task-area">
                <AddedTask isThisProfileTask={isThisProfileTask}/>
                <AddedTask isThisProfileTask={isThisProfileTask}/>
                <AddedTask isThisProfileTask={isThisProfileTask}/>
            </div>
        </>
    )
};
