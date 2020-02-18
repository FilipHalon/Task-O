import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

export default () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/profile">
                    
                </Route>
                <Route path="/login">

                </Route>
                <Route path="/register">

                </Route>
                <Route path="/">

                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
