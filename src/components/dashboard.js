import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class Dashboard extends React.Component{
  componentDidMount() {
    this.props.dispatch(actions.fetchBooks());
  }

  componentDidUpdate() {
  }

  render() {
    const displayName = this.props.books.user.displayName;
    const bookList = this.props.books.books;
    const displayBooks = bookList.map(book => {
      return <li key={book._id}>{book.title} by <span className="author">{book.author}</span></li>
    })
    return(
      <div className="dashboard">
        <h1>The NWS Lending Library</h1>
        <p>Welcome back, {displayName}</p>
        <ul className="books">
          {displayBooks}
        </ul>
        
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    books: state.books,
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Dashboard);

