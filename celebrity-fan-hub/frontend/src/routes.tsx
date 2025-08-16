import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Celebrity from './pages/Celebrity';
import CelebrityPage from './components/Celebrity/CelebrityPage';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/celebrities" exact component={Celebrity} />
                <Route path="/celebrities/:id" component={CelebrityPage} />
            </Switch>
        </Router>
    );
};

export default Routes;