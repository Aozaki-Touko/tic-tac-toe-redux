const xIsNext = (state = true, action) => {
  switch (action.type) {
    case "SETXISNEXT":
      return action.value;

    case "FLIPENDTURN":
      return !state;

    default:
      return state;
  }
};

export default xIsNext;
