import { RequestError } from 'features/api/models';
import { createAction, createAsyncAction } from 'typesafe-actions';

export const fetchSkywalkers = createAction(
  'skywalkers/FETCH_SKYWALKERS'
);

export const fetchSkywalkersRequest = createAsyncAction(
  'skywalkers/FETCH_SKYWALKERS_REQUESTED',
  'skywalkers/FETCH_SKYWALKERS_SUCCEEDED',
  'skywalkers/FETCH_SKYWALKERS_FAILED',
)<void, number, RequestError>();

export const deleteSkywalker = createAction(
  'skywalkers/DELETE_SKYWALKER', name => name
);
