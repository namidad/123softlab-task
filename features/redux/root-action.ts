import { Dispatch as ReduxDispatch } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as counter from '../counter/actions';
import * as list from '../skywalkers/actions';

export const actions = {
  counter,
  list,
};

type RootAction = ActionType<typeof actions>;
type Dispatch = ReduxDispatch<RootAction>;

export { RootAction, Dispatch };
