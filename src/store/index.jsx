import { 
    createStore, 
    combineReducers, 
    applyMiddleware 
} from 'redux';

import thunk from 'react-redux';

import reducersDigimons from './modules/digimons/reducers';

const reducers = combineReducers({ digimons: reducersDigimons });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;