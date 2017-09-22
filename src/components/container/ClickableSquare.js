import {connect} from 'react-redux';
import {storeNewStep, setStepNumber, flipEndTurn} from './../../actions';
import Square from '../presentational/Square';

const mapStateToProps = (state, props) => ({
    value: (state.history[state.history.length-1].squares)[props.index],
    history: state.history,
    stepNumber: state.stepNumber,
    xIsNext: state.xIsNext,
    index: props.index
})

const mapDispatchToProps = (dispatch) => ({
    storeNewStep: (squares) => {
        dispatch(storeNewStep(squares));
    },

    setStepNumber: (step) => {
        dispatch(setStepNumber(step));
    },

    flipEndTurn: ()=>{
        dispatch(flipEndTurn());
    }
})


const ClickableSquare = connect(mapStateToProps,mapDispatchToProps)(Square);
export default ClickableSquare;