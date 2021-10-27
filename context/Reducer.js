const Reducer = (state, action) => {
  switch (action.type) {
    ///////////////////login and register
    case "SET_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: true,
      };

    case "SET_CHOICE":
      return {
        ...state,
        set: action.data,
      };

    default:
      return state;
  }
};

export default Reducer;
