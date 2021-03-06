const initialState = {
    race: "",
    clas: "",
    skills: "",
    savings: [""],
    proficiencies: [""],
    test: 25
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
      case 'SET_CLASS':
        nextState = {
          ...state,
          clas: action.value.clas
      };
      case 'SET_SKILLS':
        console.log("sETTING skill: ", action.value);
        nextState = {
          ...state,
          skills: action.value
      };
      default:
          return state;
  }
  }
  
  export default BaseReducer;