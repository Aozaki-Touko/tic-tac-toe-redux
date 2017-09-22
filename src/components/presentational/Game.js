import React from 'react';
import Board from './Board';
import calculateWinner from '../../ulits/caculateWinner';

class Game extends React.Component {

    jumpTo = (step) => {
        this
            .props
            .jumpToStep(step);
        this
            .props
            .setStepNumber(step);
        this
            .props
            .setXIsNext((step % 2) === 0);
    }

    render() {
        const history = this.props.history;
        const current = history[this.props.stepNumber];
        console.log(this.props.stepNumber);
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move
                ? "Move #" + move
                : "Game start";
            return (
                <li key={move}>
                    <a href="#step" onClick={() => this.jumpTo(move)}>{desc}</a>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.props.xIsNext
                ? "X"
                : "O");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;