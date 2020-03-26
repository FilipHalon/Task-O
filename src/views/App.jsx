import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SignInPage from './SignInPage/SignInPage';
import AuthForm from './Forms/AuthForm';
import theme from '../themes/Themes';
import { ThemeProvider } from 'styled-components';
import LoggedUserSections from './LoggedUserSections';
import { Main } from './Styled';

export default () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header />
                <Main>
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
                </Main>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    )
};
