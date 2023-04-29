import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Button } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

import products from '../_mock/products';

import * as React from 'react';

import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { getProduct } from '../utils/db';

// ----------------------------------------------------------------------

export default function EcoCheckDashboard() {
  const { items } = useParams();

  const [items_, setItems] = useState([]);

  const [test_products, setTestProducts] = useState([]);

  useEffect(() => {
    // parse url params
    // dashboard/app/items[]=1&items[]=2&items[]=3

    const result = items.split('&').map(async (item) => {
      const [key, value] = item.split('=');
      const product = products[value];

      //append to test_products
      // setTestProducts((test_products) => [...test_products, product]);

      return { [key]: value };
    });
    setItems(result);
    console.log('Items', result);
    // console.log('Test Products', test_products);
  }, []);

  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth='xl'>
        <Typography variant='h4' sx={{ mb: 5 }}>
          Your Reciept
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            {/* Current Impact */}
            <AppTrafficBySite
              title='Current Impact'
              list={[...Array(3)].map((_, index) => ({
                id: products[index].id,
                name: products[index].name,
                value: products[index].price,
                image: products[index].cover,
                shipping_distance: products[index].shipping_distance,
                energy: products[index].energy,
                packing_waste: products[index].packing_waste,
                eco_check: products[index].eco_check,
                // image: products[index].cover,
                postedAt: faker.date.recent(),
                id2: products[index + 10].id,
                name2: products[index + 10].name,
                value2: products[index + 10].price,
                image2: products[index + 10].cover,
                shipping_distance2: products[index + 10].shipping_distance,
                energy2: products[index + 10].energy,
                packing_waste2: products[index + 10].packing_waste,
                eco_check2: products[index + 10].eco_check,
                postedAt2: faker.date.recent(),
              }))}
              subheader={undefined}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title='Items You Purchased'
              list={[...Array(3)].map((_, index) => ({
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
}
