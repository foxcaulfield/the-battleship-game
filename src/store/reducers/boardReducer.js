import { getRandomIntInclusive } from "../../utils/randomInteger";
const SET_SHIP_POSITION_ACTION_TYPE_BOARD_REDUCER =
  "SET_SHIP_POSITION_ACTION_TYPE_BOARD_REDUCER";
const GET_GUESS_ACTION_TYPE_BOARD_REDUCER =
  "GET_GUESS_ACTION_TYPE_BOARD_REDUCER";
const SET_WIN_GAME_OVER_FLOW_ACTION_TYPE_BOARD_REDUCER =
  "SET_WIN_GAME_OVER_FLOW_ACTION_TYPE_BOARD_REDUCER";

const boardInitialState = {
  fieldLength: 9,
  shipPosition: null,
  lastGuess: null,

  attemptsLeft: 5,

  isWin: false,
  isGameOver: false,
};

function boardReducer(state = boardInitialState, action) {
  switch (action.type) {
    case SET_SHIP_POSITION_ACTION_TYPE_BOARD_REDUCER:
      return {
        ...state,
        shipPosition: getRandomIntInclusive(1, state.fieldLength),
        lastGuess: boardInitialState.lastGuess,
        attemptsLeft: boardInitialState.attemptsLeft,
        isWin: boardInitialState.isWin,
        isGameOver: boardInitialState.isGameOver,
      };
    case GET_GUESS_ACTION_TYPE_BOARD_REDUCER:
      // debugger;
      return {
        ...state,
        lastGuess: +action.lastGuess,
        attemptsLeft: state.attemptsLeft - 1,
      };
    case SET_WIN_GAME_OVER_FLOW_ACTION_TYPE_BOARD_REDUCER:
      // debugger;
      return {
        ...state,
        isWin: state.lastGuess === state.shipPosition,
        isGameOver:
          state.attemptsLeft < 1 || state.lastGuess === state.shipPosition,
      };
    default: {
      return state;
    }
  }
}

export function setWinGameOverFlow() {
  return {
    type: SET_WIN_GAME_OVER_FLOW_ACTION_TYPE_BOARD_REDUCER,
  };
}

export function setShipPositionActionCreator() {
  return {
    type: SET_SHIP_POSITION_ACTION_TYPE_BOARD_REDUCER,
  };
}

export function getGuessActionCreator(guess) {
  return {
    type: GET_GUESS_ACTION_TYPE_BOARD_REDUCER,
    lastGuess: guess,
  };
}

export default boardReducer;
