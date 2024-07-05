const emotionReducer = (state, action) => {
    switch (action.type) {
      case 'SET_EMOTION':
        return action.payload;
      default:
        return state;
    }
  };
  
export default emotionReducer;
