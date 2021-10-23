const Reducer = (state, action) => {
  switch (action.type) {
    ///////////////////login and register
    case "SET_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: true,
      };

    default:
      return state;
  }
};

export default Reducer;
