/* eslint-env jest */
import { initialState } from './reducer';

describe('Skywalkers reducer Stories', () => {
  describe('initialization', () => {
    it('should initialize reducer correctly', () => {
      expect(initialState.list).toEqual([]);
    });
  });
});
