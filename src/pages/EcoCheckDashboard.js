import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
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

// ----------------------------------------------------------------------

export default function EcoCheckDashboard() {
  const { items } = useParams();

  const [items_, setItems] = useState([]);

  useEffect(() => {
    // parse url params
    // dashboard/app/items[]=1&items[]=2&items[]=3

    const result = items.split('&').map((item) => {
      const [key, value] = item.split('=');
      return { [key]: value };
    });
    setItems(result);
    console.log(items_);
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
                id: faker.datatype.uuid(),
                name: products[index].name,
                value: products[index].price,
                image: products[index].cover,
                postedAt: faker.date.recent(),
                id2: faker.datatype.uuid(),
                name2: products[index + 1].name,
                value2: products[index + 1].price,
                image2: products[index + 1].cover,
                postedAt2: faker.date.recent(),
              }))}
              subheader={undefined}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title='Items You Purchased'
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
}
