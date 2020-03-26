import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddedTasks from './AddedTasks/AddedTasks';
import ContentAddForm from './Forms/ContentAddForm';
import TaskDetails from './TaskDetails';
import SolutionAdded from './SolutionAdded/SolutionAdded';
import Profile from './Profile/Profile';
import TaskSidebar from '../components/TaskSidebar/TaskSidebar';
import { ContentSection, ContentDiv } from './Styled';

export default () => {
    
    return (
        <>
            <TaskSidebar />
            <ContentSection>
                <ContentDiv>
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
                </ContentDiv>
            </ContentSection>
        </>
    )
}
