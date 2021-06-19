import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { apolloClient } from '@providers/graphql';
import { ICar } from 'shared/interfaces/car';

import { GET_ALL_CARS } from './queries';

class YourCarApi {
  private client: ApolloClient<NormalizedCacheObject>;

  constructor() {
    this.client = apolloClient;
  }

  public async getAllCars(): Promise<ICar[]> {
    try {
      const response = await this.client.query({ query: GET_ALL_CARS });

      return response.data.cars;
    } catch (err) {
      throw new Error(err);
    }
  }
}

const yourCarApi = new YourCarApi();

export { yourCarApi };
