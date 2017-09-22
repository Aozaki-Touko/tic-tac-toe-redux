export const storeNewStep = (squares)=>({
    type: 'STORE_NEWSTEP',
    squares
})

export const jumpToStep = (move) => ({
    type: 'JUMPTOSTEP',
    move
})

export const setStepNumber = (step)=>({
    type: 'SETSTEPNUMBER',
    step
})

export const setXIsNext = (value) =>({
    type: 'SETXISNEXT',
    value
})

export const flipEndTurn = () => ({
    type: 'FLIPENDTURN'
})
