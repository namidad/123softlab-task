import { get } from 'features/api/api';
import { SwapiPlanetResponse } from './models';

export const getSkywalkersFromSwapi = (): Promise<SwapiPlanetResponse> =>
  get<SwapiPlanetResponse>(
    'https://swapi.co/api/people/?search=Skywalker&format=json',
  );
