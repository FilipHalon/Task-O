import React from 'react';
import Sidebar from "../components/Sidebar";
import AvailableTask from '../components/AvailableTask';

export default props => {
    const isThisProfileTask = props.ownTasks === "thisProfileTasks"; 

    return(
        <main>
            <Sidebar />
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
                    <AvailableTask ownTask={isThisProfileTask && "thisProfileTasks"}/>
                    <AvailableTask ownTask={isThisProfileTask && "thisProfileTasks"}/>
                    <AvailableTask ownTask={isThisProfileTask && "thisProfileTasks"}/>
                </div>
            </div>
        </section>
        </main>
    )
};
