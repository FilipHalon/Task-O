import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Profile from './Profile';
import SignInPage from './SignInPage';
import AuthForm from './AuthForm';
import AddedTasks from './AddedTasks';
import ContentAddForm from './ContentAddForm';
import TaskDetails from './TaskDetails';
import SolutionAdded from './SolutionAdded';

export default () => {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Switch>
                    <Route path="/welcome">
                        <SignInPage />
                    </Route>
                    <Route path="/register">
                        <AuthForm formType="register"/>
                    </Route>
                    <Route path="/login">
                        <AuthForm formType="login" />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/tasks">
                        <AddedTasks />
                    </Route>
                    <Route path="/this-profile-tasks">
                        <AddedTasks isThisProfileTask={true} />
                    </Route>
                    <Route path="/new-solution-add">
                        <ContentAddForm isNewSolution={true} />
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
                    <Route exact path="/">
                        <Profile />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    )
}
