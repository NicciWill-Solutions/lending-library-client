import * as actions from '../actions';

const initialState = {
  user: {
    displayName: 'Nicci',
    email: 'nicciwill@gmail.com'
  },
  books: [],
  searchTerm: '',
  loading: false,
  error: null
}

export const booksReducer = (state=initialState, action) => {  //watch this
  if(action.type === actions.FETCH_BOOKS_REQUEST) {
    return Object.assign({}, state, {
      loading: action.loading
    })
  }
  else if(action.type === actions.FETCH_BOOKS_SUCCESS) {
    return Object.assign({}, state, {
      loading: action.loading,
      error: action.error,
      books: action.books
    })
  }
  else if(action.type === actions.FETCH_BOOKS_ERROR) {
    return Object.assign({}, state, {
      loading: action.loading,
      error: action.error
    })
  }
  return state;
}