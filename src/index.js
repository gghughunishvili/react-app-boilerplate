import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'
import { Router, browserHistory } from 'react-router'
import './assets/global.scss';

const routes = {
    path: '/',
    indexRoute: { component: App },
    childRoutes: [
        { path: 'about', component: About },
        { path: 'contact', component: Contact },
        { path: 'login', component: Login },
        { path: 'register', component: Register },
    ]
}

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('root'))
