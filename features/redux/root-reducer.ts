import { combineReducers } from 'redux';
import { RootAction } from '.';
import counter from '../counter/reducer';
import skywalkers from '../skywalkers/reducer';

const reducerMap = {
  counter,
  skywalkers,
};

type RootState = { [K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]> };
const rootReducer = combineReducers<RootState, RootAction>(reducerMap);

export { RootState, rootReducer };
