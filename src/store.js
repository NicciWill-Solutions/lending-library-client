import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as formReducer } from 'redux-form';
import { booksReducer } from '../src/reducers/booksReducer';

const rootReducer = combineReducers(
  {
    form: formReducer,
    books: booksReducer
  }
);

export default createStore(rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);