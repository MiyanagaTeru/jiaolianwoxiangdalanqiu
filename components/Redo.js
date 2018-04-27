import React from 'react';
import { connect } from 'react-redux';
import { changePage, ENTER_NUMBER } from '../actions/displayPage';
import { resetBracket } from '../actions/bracket';
import { resetPeople} from '../actions/people';
import styles from './styles.css';

@connect(
  (state) => ({
  }),
  {changePage, resetBracket, resetPeople}
)

class Redo extends React.PureComponent {
  render() {
    const {changePage, resetBracket, resetPeople} = this.props;
    return (
      <div className={styles.redoWrapper}>
        <div
          className={styles.redoBtn}
          onClick={() => {
            changePage(ENTER_NUMBER);
            resetBracket();
            resetPeople();
          }}
        >
          重新分组
        </div>
      </div>
    )
  }
}

export default Redo;