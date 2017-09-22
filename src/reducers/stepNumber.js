const stepNumber = (state = 0, action) => {
    switch (action.type) {
        case 'SETSTEPNUMBER':
            return action.step;
        default:
            return state;
    }
}

export default stepNumber;