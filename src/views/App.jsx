import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SignInPage from './SignInPage';
import AuthForm from './AuthForm';
import theme from '../components/Themes';
import { ThemeProvider } from 'styled-components';
import LoggedUserSections from './LoggedUserSections';

export default () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header />
                <main>
                    <Switch>
                        <Route path="/welcome">
                            <SignInPage />
                        </Route>
                        <Route path="/register">
                            <AuthForm isRegisterForm />
                        </Route>
                        <Route path="/login">
                            <AuthForm />
                        </Route>
                        <Route exact path={["/", 
                                            "/tasks", 
                                            "/this-profile-tasks",
                                            "/new-solution-add",
                                            "/new-task-add",
                                            "/task-details",
                                            "/solution-added"
                                            ]}>
                            <LoggedUserSections />
                        </Route>
                    </Switch>
                </main>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    )
}
