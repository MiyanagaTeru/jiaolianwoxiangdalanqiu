import React from 'react';
import { connect } from 'react-redux';
import { setNumberOfPeople } from '../actions/people';
import { generateBracket } from '../actions/bracket';
import { changePage, SHOW_BRACKET, ENTER_NUMBER } from '../actions/displayPage';

import styles from './styles.css';

const CONVINIENT_NUMBERS = [3, 4, 5, 6, 7, 8, 9, 10, 11];

@connect(
  (state) => ({
    displayPage: state.displayPage
  }),
  {setNumberOfPeople, generateBracket, changePage}
)
class EnterNumber extends React.PureComponent {
  constructor(props) {
    super(props);
    const {
      setNumberOfPeople,
      generateBracket,
      changePage
    } = this.props;

    this.submitNumber = (value) => {
      setNumberOfPeople(value);
      generateBracket(value);
      changePage(SHOW_BRACKET);
    };
  }
  render () {
    const {displayPage} = this.props;
    return (
      <div className={`${styles.numberWrapper} ${displayPage !== ENTER_NUMBER ? styles.hidden : ''}`}>
        <div className={styles.plainText}>人数？</div>
        <div className={styles.numbers}>
        {
          CONVINIENT_NUMBERS.map((number, index) =>
            <div
              key={index}
              className={styles.number}
              onClick={() => {
                this.submitNumber(number);
              }}
            >
              {number}
            </div>
          )
        }
        </div>
      </div>
    )
  }
}

export default EnterNumber;
