import {combineReducers} from 'redux';
import history from './history';
import stepNumber from './stepNumber';
import xIsNext from './xIsNext';

const tictactoeApp = combineReducers({
    history,
    stepNumber,
    xIsNext
})

export default tictactoeApp;