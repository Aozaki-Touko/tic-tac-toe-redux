import React from "react";
import calculateWinner from "../../ulits/caculateWinner";

class Square extends React.Component {
  clickHandler = i => () => {
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? "X" : "O";
    this.props.storeNewStep(squares);
    this.props.setStepNumber(history.length);
    this.props.flipEndTurn();
  };

  render() {
    return (
      <button className="square" onClick={this.clickHandler(this.props.index)}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
