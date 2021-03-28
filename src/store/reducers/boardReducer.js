import { getRandomIntInclusive } from "../../utils/randomInteger";
const SET_SHIP_POSITION_ACTION_TYPE_BOARD_REDUCER =
  "SET_SHIP_POSITION_ACTION_TYPE_BOARD_REDUCER";
const GET_GUESS_ACTION_TYPE_BOARD_REDUCER =
  "GET_GUESS_ACTION_TYPE_BOARD_REDUCER";

const boardInitialState = {
  fieldLength: 9,
  shipPosition: null,
  lastGuess: null,
  lastShotSuccess: null,
};

function boardReducer(state = boardInitialState, action) {
  switch (action.type) {
    case SET_SHIP_POSITION_ACTION_TYPE_BOARD_REDUCER:
      return {
        ...state,
        shipPosition: getRandomIntInclusive(1, state.fieldLength),
      };
    case GET_GUESS_ACTION_TYPE_BOARD_REDUCER:
      return {
        ...state,
        lastGuess: action.lastGuess,
        lastShotSuccess:
          +action.lastGuess === state.shipPosition ? true : false,
      };
    default: {
      return state;
    }
  }
}

export function setShipPositionActionCreator() {
  return {
    type: SET_SHIP_POSITION_ACTION_TYPE_BOARD_REDUCER,
  };
}

export function getGuessActionCreator(guess) {
  alert(guess);
  return {
    type: GET_GUESS_ACTION_TYPE_BOARD_REDUCER,
    lastGuess: guess,
  };
}

export default boardReducer;
