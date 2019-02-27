import { RootState } from '../redux';

export function getList(state: RootState): string[] {
  return state.skywalkers.list;
}

export function isFetching(state: RootState): boolean {
  return state.skywalkers.isFetching;
}
