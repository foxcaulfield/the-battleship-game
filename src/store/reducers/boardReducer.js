import { getRandomIntInclusive } from "../../utils/randomInteger";
const SET_SHIP_POSITION_ACTION_TYPE_BOARD_REDUCER =
  "SET_SHIP_POSITION_ACTION_TYPE_BOARD_REDUCER";
const GET_GUESS_ACTION_TYPE_BOARD_REDUCER =
  "GET_GUESS_ACTION_TYPE_BOARD_REDUCER";
const TOGGLE_WIN_GAME_OVER_FLOW_ACTION_TYPE_BOARD_REDUCER =
  "TOGGLE_WIN_GAME_OVER_FLOW_ACTION_TYPE_BOARD_REDUCER";
const SET_THEME_ACTION_TYPE_BOARD_REDUCER =
  "SET_THEME_ACTION_TYPE_BOARD_REDUCER";

const boardInitialState = {
  fieldLength: 9,
  attemptsLeft: 5,
  theme: 1,

  shipPosition: null,
  lastGuess: null,

  guessesArray: [],

  isWin: false,
  isGameOver: false,
};

function boardReducer(state = boardInitialState, action) {
  switch (action.type) {
    case SET_SHIP_POSITION_ACTION_TYPE_BOARD_REDUCER:
      return {
        ...boardInitialState,
        shipPosition: getRandomIntInclusive(1, state.fieldLength),
      };
    case GET_GUESS_ACTION_TYPE_BOARD_REDUCER:
      return {
        ...state,
        lastGuess: +action.lastGuess,
        attemptsLeft: state.attemptsLeft - 1,
        guessesArray: [...state.guessesArray, +action.lastGuess],
      };
    case TOGGLE_WIN_GAME_OVER_FLOW_ACTION_TYPE_BOARD_REDUCER:
      return {
        ...state,
        isWin: state.lastGuess === state.shipPosition,
        isGameOver:
          state.attemptsLeft < 1 || state.lastGuess === state.shipPosition,
      };
    case SET_THEME_ACTION_TYPE_BOARD_REDUCER:
      return {
        ...state,
        theme: ++state.theme,
      };
    default: {
      return state;
    }
  }
}

export function toggleWinGameOverFlow() {
  return {
    type: TOGGLE_WIN_GAME_OVER_FLOW_ACTION_TYPE_BOARD_REDUCER,
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

export function setThemeActionCreator() {
  return {
    type: SET_THEME_ACTION_TYPE_BOARD_REDUCER,
  };
}

export default boardReducer;
