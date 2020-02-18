import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ProfilePage from './ProfilePage';

export default () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <main>
                    <Route path="/profile">
                        <ProfilePage />
                    </Route>
                    <Route path="/login">

                    </Route>
                    <Route path="/register">

                    </Route>
                    <Route path="/">
                        <ProfilePage />
                    </Route>
                </main>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
