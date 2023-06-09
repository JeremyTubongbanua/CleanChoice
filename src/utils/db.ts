import axios from 'axios';
import * as React from 'react';

export const getProduct = async (id: string) => {
  // cors header access contro lallow origin
  const response = await axios.get('http://34.70.42.180:3001/product', {
    params: {
      id: id,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
  console.log(response);
  return response;
};
