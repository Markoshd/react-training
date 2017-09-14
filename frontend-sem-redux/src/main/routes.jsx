import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'
import Manual from '../dayMenu/components/manualPunchCreate'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Route path='/manual' component={Manual} />
        <Redirect from='*' to='/todos' />
    </Router>
)