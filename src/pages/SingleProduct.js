import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Grid, Container } from '@mui/material';
import AppConversionRates from '../sections/@dashboard/app/AppConversionRates';
import ShopProductCard from '../sections/@dashboard/products/ProductCard';
import AppNewsUpdate from '../sections/@dashboard/app/AppNewsUpdate';
import { faker } from '@faker-js/faker';

import products from '../_mock/products';

// ----------------------------------------------------------------------

const SingleProduct = () => {
  const { productId } = useParams();

  const product = products[1];

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth='xl'>
        <Grid container spacing={3}>
          <Grid key={productId} item xs={12} sm={6} md={3}>
            <ShopProductCard product={product} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title='Environmental Impact'
              subheader='(+43%) than last year'
              chartData={[
                { label: 'Shipping', value: 3 },
                { label: 'Packaging', value: 5 },
                { label: 'Carbon Footprint', value: 6 },
                { label: 'Plane Emmissions', value: 9 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title='Viable Substitutes'
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: products[index].name,
                description: products[index].price,
                image: products[index].cover,
                postedAt: faker.date.recent(),
              }))}
              subheader={undefined}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SingleProduct;
