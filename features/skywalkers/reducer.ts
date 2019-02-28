import { getType } from 'typesafe-actions';
import { RootAction } from '../redux';
import { fetchSkywalkersRequest, deleteSkywalker } from './actions';

export type SkywalkersState = {
  readonly list: string[];
  readonly isFetching: boolean;
};

export const initialState: SkywalkersState = {
  list: [],
  isFetching: false,
};

export default function (state: SkywalkersState = initialState, action: RootAction): SkywalkersState {
  switch (action.type) {
    case (getType(fetchSkywalkersRequest.request)):
      return {
        ...state,
        isFetching: true,
      };
    case (getType(fetchSkywalkersRequest.success)):
      return {
        ...state,
        list: action.payload,
        isFetching: false,
      };
    case (getType(fetchSkywalkersRequest.failure)):
      return {
        ...state,
        isFetching: false,
      };
    case (getType(deleteSkywalker)):
      return {
        ...state,
        list: [...state.list.filter(list => list.name!==action.payload)],
      };

    default: {
      return state;
    }
  }
}
