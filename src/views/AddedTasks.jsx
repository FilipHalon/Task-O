import React from 'react';
import TaskSidebar from "../components/TaskSidebar";
import AddedTask from '../components/AddedTask';

export default props => {
    const { isThisProfileTask } = props; 

    return(
        <React.Fragment>
            <TaskSidebar />
            <section className="task-description">
                <div className="task-description">
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
                        <AddedTask thisProfileTasks={isThisProfileTask && "thisProfileTasks"}/>
                        <AddedTask thisProfileTasks={isThisProfileTask && "thisProfileTasks"}/>
                        <AddedTask thisProfileTasks={isThisProfileTask && "thisProfileTasks"}/>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
