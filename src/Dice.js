import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';
/** Props:
 *        - dice
 *        - toggleLocked()
 *        - locked
 */
// passing down toggleLocked(prop-handleClick) to each Die
class Dice extends Component {
  render() {
    return <div className="Dice">
      {this.props.dice.map((d, idx) =>
        <Die handleClick={this.props.handleClick}
          val={d}
          locked={this.props.locked[idx]}
          idx={idx}
          key={idx}
          disabled={this.props.disabled}
          rolling={this.props.rolling && !this.props.locked[idx]}
        />
      )}
    </div>
  }
}

export default Dice;