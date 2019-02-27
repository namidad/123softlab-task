import Counter from 'components/counter/counter';
import Skywalkers from 'components/skywalkers/skywalkers';
import { RootAction } from 'features/redux/root-action';
import { RootState } from 'features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import React from 'react';
import { Store } from 'redux';

const Index: NextFunctionComponent<{}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <Skywalkers />
    </div>);
};

export default Index;
