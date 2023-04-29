// @mui
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Paper,
  Typography,
  CardHeader,
  CardContent,
  Grid,
} from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

import * as React from 'react';
import { Stack } from '@mui/system';

// navigation
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

AppTrafficBySite.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppTrafficBySite({ title, subheader, list, ...other }) {
  const navigate = useNavigate();

  const [id, setId] = React.useState(0);

  const onSubmit = async () => {
    navigate(`/dashboard/products/${id}`);
  };

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <CardHeader title={'Yours'} />
        </Grid>
        <Grid item xs={3}>
          <CardHeader title={'vs.'} />
        </Grid>
        <Grid item xs={2}>
          <CardHeader title={'Theirs'} />
        </Grid>
      </Grid>

      <CardContent>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: 'repeat(1, 1fr)',
          }}
        >
          {list.map((site) => (
            <>
              <Paper
                key={site.name}
                variant='outlined'
                sx={{ py: 2.5, textAlign: 'center' }}
              >
                {/* column of two */}
                <Stack spacing={2}>
                  {/* row of two */}
                  <Grid container spacing={3}>
                    {/* product 1 */}
                    <Grid item xs={6}>
                      <Box
                        onClick={() => {
                          setId(site.id);
                          onSubmit();
                        }}
                      >
                        <Box sx={{ mb: 0.5, mx: 2 }}>
                          <img
                            src={site.image}
                            alt={site.name}
                            style={{
                              borderRadius: '10%',
                            }}
                          />
                        </Box>
                      </Box>

                      <Typography variant='h5'>
                        ${fShortenNumber(site.value)}
                      </Typography>

                      <Typography
                        variant='body2'
                        sx={{ color: 'text.secondary' }}
                      >
                        {site.name}
                      </Typography>

                      <Typography variant='h6'>
                        {fShortenNumber(site.value)}%
                      </Typography>
                    </Grid>
                    {/* Product 2 */}
                    <Grid item xs={6}>
                      <Box sx={{ mb: 0.5, mx: 2 }}>
                        <img
                          src={site.image2}
                          alt={site.name2}
                          style={{
                            borderRadius: '10%',
                          }}
                        />
                      </Box>

                      <Typography variant='h5'>
                        ${fShortenNumber(site.value2)}
                      </Typography>

                      <Typography
                        variant='body2'
                        sx={{ color: 'text.secondary' }}
                      >
                        {site.name2}
                      </Typography>

                      <Typography variant='h6'>
                        {fShortenNumber(site.value2)}%
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant='body2'>
                    {site.name2} is 35% more eco-friendly than {site.name}.
                  </Typography>
                </Stack>
              </Paper>
            </>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
