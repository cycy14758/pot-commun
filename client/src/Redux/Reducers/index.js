import { combineReducers } from "redux";
import { potsReducer } from './potReducer';
import {userReducer} from './userReducer';
export const rootReducer = combineReducers({potsReducer, userReducer})