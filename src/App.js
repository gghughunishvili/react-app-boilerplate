import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { connect } from 'react-redux';

import { history } from './helpers';
import { alert as alertActions } from './actions';
import { PrivateRoute } from './components/PrivateRoute';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import MyNavbar from './container/MyNavbar';

class App extends Component {
    constructor(props) {
        super(props);

        // this line is required to work on plunker because the app preview runs on a subfolder url
        //history.push('/');

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <Router history={history}>
                <div>
                    <MyNavbar />
                    <div className="jumbotron">
                        <div className="container">
                            <div className="col-sm-8 col-sm-offset-2">
                                {alert.message &&
                                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                                }
                                <div>
                                    <PrivateRoute exact path='/' component={Home} />
                                    <Route path="/login" component={Login} />
                                    <Route path="/register" component={Register} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export default connect(mapStateToProps)(App);

/*
// Old Stuf here
import React, { Component } from 'react';
import './App.css';
import MyNavbar from './container/MyNavbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <h1 className="text-center" style={{marginTop: '100px', color: 'mediumspringgreen'}}> Welcome to Google</h1>
      </div>
    );
  }
}

export default App;
*/
