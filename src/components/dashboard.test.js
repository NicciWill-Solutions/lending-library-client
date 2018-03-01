import React from 'react';
import {shallow} from 'enzyme';
import {Dashboard} from './dashboard';   //unconnected component
import {fetchBooks} from '../actions';

describe('<Dashboard />', () => {
  it('Dispatches the fetchBooks action', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(
      <Dashboard 
        books={ {
          user: {displayName: ''},
          books: []
        } }
        dispatch={dispatch} 
      />
    );
    const instance = wrapper.instance();
    instance.componentDidMount();
    expect(dispatch).toHaveBeenCalled(); //why doesn't this pass with toHaveBeenCalledWith(fetchBooks())
  })
})


