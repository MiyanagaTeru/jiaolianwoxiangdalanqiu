import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import vsImage from '../assets/vs.png';
import { setWinner, switchGameDone } from '../actions/bracket';
import { calculateScore } from '../actions/people';


const isLeading = (number, arr) => arr.includes(number);

@connect(
  (state) => ({
    players: state.people.players,
    leadingPlayers: state.people.leadingPlayers,
    bracket: state.bracket
  }),
  {setWinner, switchGameDone, calculateScore}
)

class OneMatch extends React.PureComponent {
  render() {
    const {players, leadingPlayers, bracket, match, matchIndex, setWinner, switchGameDone, calculateScore} = this.props;
    const {left, right, winner, done} = match;
    return (
      <div className={`${styles.oneMatchWrapper} ${match.done ? styles.fade : ''}`}>
        <table className={styles.oneMatchTable}>
          <thead onClick={() => switchGameDone(matchIndex, !done)}
          >
            <tr>
              <th colSpan="3">第{matchIndex + 1}场</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className={`${styles.left} ${winner === 'left' ? styles.pop : ''}`}
                onClick={() => {
                  setWinner(matchIndex, 'left');
                  switchGameDone(matchIndex, true);
                  calculateScore([...bracket, {...bracket[matchIndex], winner: 'left', done: true}]); //super hacky
                }}>
              {
                left.map((player, index) =>
                  <div
                    className={`${styles.player} ${isLeading(player, leadingPlayers) ? styles.leading : ''}`}
                    key={`${matchIndex}-team1-${index}`}>
                    {player}
                  </div>
                )
              }
              </td>
              <td className={styles.middle}>
                <img className={styles.vsImage} src={vsImage}/>
              </td>
              <td
                className={`${styles.right} ${winner === 'right' ? styles.pop : ''}`}
                onClick={() => {
                  setWinner(matchIndex, 'right');
                  switchGameDone(matchIndex, true);
                  calculateScore([...bracket, {...bracket[matchIndex], winner: 'right', done: true}]);
                }}>
              {
                right.map((player, index) =>
                  <div
                    className={`${styles.player} ${isLeading(player, leadingPlayers) ? styles.leading : ''}`}
                    key={`${matchIndex}-team2-${index}`}>
                    {player}
                  </div>
                )
              }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default OneMatch;