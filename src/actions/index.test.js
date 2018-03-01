import * as actions from './index';
import {booksReducer} from '../reducers/booksReducer';

describe('fetchBooksSuccess', () => {
  const books = ['The Shining', 'Happy Gilmore'];
  
  it('Should return the action', () => {
    const action = actions.fetchBooksSuccess(books);
    const loading = actions.loading;
    const error = actions.error;
    expect(action.type).toEqual(actions.FETCH_BOOKS_SUCCESS);
    expect(action.books).toEqual(books);
  });

  it('Should add books to state books array', () => {
    let state = {
      books: []
    };
    state = booksReducer(state, actions.fetchBooksSuccess(books));
    expect(state).toEqual({
      books: books,
      error: null,
      loading: false
    });
  });
});