export default (state, action) => {
  switch (action.type) {
    case "LOAD_CYCLE": {
      return {
        ...state,
        loading: false,
        cycles: action.payload,
      };
    }
    case "BOOK_CYCLE": {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        bookedCycle: [...state.bookedCycle, action.payload.cycle],
        successMessage: action.payload.msg,
      };
    }
    case "CLEAR_SUCCESS_MESSAGE": {
      return {
        ...state,
        successMessage: null,
      };
    }
    case "GET_BOOK_CYCLE": {
      return {
        ...state,
        loading: false,
        bookedCycle: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
