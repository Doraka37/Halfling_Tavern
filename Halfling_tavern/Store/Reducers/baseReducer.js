const initialState = {
    race: "",
  };
  
  function BaseReducer(state = initialState, action) {
    let nextState = {};
    switch (action.type) {
      case 'SET_COURSE_SETTINGS':
        nextState = {
          ...state,
          ...action.value
        };
  
      return nextState;
      case 'SET_RACE':
        nextState = {
          ...state,
          race: action.value
        };
        default:
            return state;
    }
  }
  
  export default BaseReducer;