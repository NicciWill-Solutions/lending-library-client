import { API_BASE_URL } from '../config';

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
  loading: true
});

export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const fetchBooksSuccess = books => ({
  type: FETCH_BOOKS_SUCCESS,
  books,
  loading: false,
  error: null
});

export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';
export const fetchBooksError = err => ({
  type: FETCH_BOOKS_ERROR,
  loading: false,
  error: err
})

export const fetchBooks = () => dispatch => {
  dispatch(fetchBooksRequest());
  fetch(`${API_BASE_URL}/books`)
  .then(res => {
    if(!res.ok) {
      console.log('There was an error with your request.');
    }
    return res.json();  //be sure to ret the res!!!
  })
  .then(books => {
    dispatch(fetchBooksSuccess(books));
  })
  .catch(err => {
    dispatch(fetchBooksError(err));
  })
}