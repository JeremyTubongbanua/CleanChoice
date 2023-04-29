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

// ----------------------------------------------------------------------

AppTrafficBySite.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppTrafficBySite({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <CardHeader title={'Yours'} />
        </Grid>
        {/* <Grid item xs={4}>
          <CardHeader title={'vs.'} />
        </Grid> */}
        <Grid item xs={6}>
          <CardHeader title={'Theirs'} />
        </Grid>
      </Grid>

      <CardContent>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          {list.map((site) => (
            <Paper
              key={site.name}
              variant='outlined'
              sx={{ py: 2.5, textAlign: 'center' }}
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

              <Typography variant='h6'>
                ${fShortenNumber(site.value)}
              </Typography>

              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                {site.name}
              </Typography>
            </Paper>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
