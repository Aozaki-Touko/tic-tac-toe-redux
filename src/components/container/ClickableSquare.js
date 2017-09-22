import {connect} from 'react-redux';
import {storeNewStep, setStepNumber, flipEndTurn} from './../../actions';

const mapStateToProps = (state, props) => ({
    value: (state.history[state.history.length-1].squares)[props.index]
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