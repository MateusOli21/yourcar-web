/* eslint import/no-extraneous-dependencies: "off" */
import gql from 'graphql-tag';

export const GET_ALL_CARS = gql`
  query GetAllCars {
    cars {
      id
      name
      dailyPrice
      monthlyPrice
      mileage
      gas
      gearType
      thumbnailUrl
    }
  }
`;
