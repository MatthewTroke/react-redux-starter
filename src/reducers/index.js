import { combineReducers } from "redux";
import game from "../store/game.js";

const rootReducer = combineReducers({
  game: game
});

export default rootReducer;