const ACTION = "ACTION";

const controlButtonsInitialState = {
  field: [],
};

function controlButtonsReducer(state = controlButtonsInitialState, action) {
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
export default controlButtonsReducer;
