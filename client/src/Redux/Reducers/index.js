import { combineReducers } from "redux";
import { potReducer } from './potReducer';
import {userReducer} from './userReducer';
export const rootReducer = combineReducers({potReducer, userReducer})