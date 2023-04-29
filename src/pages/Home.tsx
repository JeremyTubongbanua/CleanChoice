import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import PopoverMenu from '../components/PopoverMenu';
import ProTip from '../components/ProTip';
import { Copyright } from '../components/Copyright';

const Home = () => {
  return (
    <Container maxWidth='sm'>
      <div className='my-4'>
        <Typography variant='h4' component='h1' gutterBottom>
          Material UI Create React App example with Tailwind CSS in TypeScript
        </Typography>
        <Slider
          className='my-4'
          defaultValue={30}
          classes={{ active: 'shadow-none' }}
          slotProps={{ thumb: { className: 'hover:shadow-none' } }}
        />
        <PopoverMenu />
        <ProTip />
        <Copyright />
      </div>
    </Container>
  );
};
export default Home;
