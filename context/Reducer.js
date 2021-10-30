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
    case "SET_TYPE":
      //console.log("filter type" + action.data);
      return {
        ...state,
        cardType: action.data,
      };
    case "SET_SELECTED_CARD":
      return{
        ...state,
        selectedCard:action.data
      }

    default:
      return state;
  }
};

export default Reducer;
