import * as React from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { productId } = useParams();
  return (
    <>
      <text>hi</text>
    </>
  );
};

export default SingleProduct;
