import { createStore, applyMiddleware,combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import authReducer from './reducers/auth'
import { watcherSaga } from './saga/rootSaga'

const reducer = combineReducers({
    auth : authReducer,
})

const sagaMiddleware = createSagaMiddleware()
// const middleware = [sagaMiddleware]

const store = createStore(reducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watcherSaga)

export default store