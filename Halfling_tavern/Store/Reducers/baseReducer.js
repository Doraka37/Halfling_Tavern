const initialState = {
    pos: 0,
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
      case 'ADD_POS':
        nextState = {
          ...state,
        pos: action.value
        };
        default:
            return state;
    }
  }
  
  export default BaseReducer;