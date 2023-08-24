import { combineReducers } from "redux";

import auth from "./auth";
import search from './search'

export const reducers = combineReducers({ auth, search });