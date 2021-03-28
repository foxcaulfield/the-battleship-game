const ACTION = "ACTION";

const viewFieldInitialState = {
  field: [],
};

function viewFieldReducer(state = viewFieldInitialState, action) {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
      };
    default: {
      return state;
    }
  }
}
export default viewFieldReducer;
