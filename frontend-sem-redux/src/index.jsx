import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'

import reducers from './dayMenu/reducers'

const devTools =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const  createStoreWithMiddleware = applyMiddleware()(createStore)
const store = applyMiddleware()(createStore)(reducers, devTools)
ReactDOM.render(
  //  {/*<Provider store={createStoreWithMiddleware(reducers)}>*/}*/
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
)