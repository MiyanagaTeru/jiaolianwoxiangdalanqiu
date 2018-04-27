import React from 'react';
import { connect } from 'react-redux';
import OneMatch from './OneMatch';
import Redo from './Redo';
import { SHOW_BRACKET } from '../actions/displayPage';
import styles from './styles.css';

@connect(
  (state) => ({
    bracket: state.bracket,
    displayPage: state.displayPage
  }),
  {}
)

class Bracket extends React.PureComponent {
  render() {
    const {bracket, displayPage} = this.props;
    return (
      <div className={`${displayPage !== SHOW_BRACKET ? styles.hidden : ''}`}>
        <Redo />
        {
          bracket.map((match, index) =>
            <OneMatch match={match} matchIndex={index} key={index} />
          )
        }
      </div>
    );
  }
}

export default Bracket;