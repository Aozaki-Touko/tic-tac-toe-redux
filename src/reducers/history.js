NULLARRAY = {squares: Array(9).fill(null)};

const history = (state = [NULLARRAY], action) => {
    switch(action.type){
        case 'STORE_NEWSTEP':
            return [...state, {squares: action.squares}];
        
        case 'JUMPTOSTEP':
            return state.slice(0, action.move + 1);

        default:
            return state;
    }
}

export default history;