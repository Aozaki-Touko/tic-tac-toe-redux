import { connect } from "react-redux";
import Game from "../presentational/Game";
import { jumpToStep, setStepNumber, setXIsNext } from "../../actions/index";

const mapStateToProps = state => ({
  history: state.history,
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext
});

const mapDispatchToProps = dispatch => ({
  jumpToStep: step => {
    dispatch(jumpToStep(step));
  },

  setStepNumber: step => {
    dispatch(setStepNumber(step));
  },

  setXIsNext: value => {
    dispatch(setXIsNext(value));
  }
});

const UndoableGame = connect(mapStateToProps, mapDispatchToProps)(Game);
export default UndoableGame;
