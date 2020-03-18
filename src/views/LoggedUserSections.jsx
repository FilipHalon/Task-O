import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddedTasks from './AddedTasks';
import ContentAddForm from './ContentAddForm';
import TaskDetails from './TaskDetails';
import SolutionAdded from './SolutionAdded';
import Profile from './Profile/Profile';
import TaskSidebar from '../components/TaskSidebar/TaskSidebar';

export default () => {
    
    return (
        <>
            <TaskSidebar />
            <section className="task-description">
                <div className="task-description">
                <Switch>
                    <Route exact path="/">
                        <Profile />
                    </Route>
                    <Route path="/tasks">
                        <AddedTasks />
                    </Route>
                    <Route path="/this-profile-tasks">
                        <AddedTasks isThisProfileTask />
                    </Route>
                    <Route path="/new-solution-add">
                        <ContentAddForm isNewSolution />
                    </Route>
                    <Route path="/new-task-add">
                        <ContentAddForm />
                    </Route>
                    <Route path="/task-details">
                        <TaskDetails />
                    </Route>
                    <Route path="/solution-added">
                        <SolutionAdded />
                    </Route>
                </Switch>
                </div>
            </section>
        </>
    )
}
