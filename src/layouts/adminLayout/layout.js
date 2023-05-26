import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Logo } from 'src/components/logo';

// TODO: Change subtitle text

export const Layout = (props) => {
  const { children } = props;

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flex: '1 1 auto'
      }}
    >
      <Grid
        container
        sx={{ flex: '1 1 auto' }}
      >
        {/* Sidebar */}
        <Grid
          item
          xs={12}
          lg={3}
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%'
            }}
          >
            <Box
              component={NextLink}
              href="/"
              sx={{
                display: 'inline-flex',
                height: 32,
                width: 32
              }}
            >
              <Logo />
            </Box>
          </Box>
          {/* Sidebar Content */}
          <Box
            sx={{
              mt: '64px', // Adjust the top margin based on your header height
              p: 2
            }}
          >
            {/* Add your sidebar content here */}
            <Typography variant="h6">Sidebar</Typography>
          </Box>
        </Grid>

        {/* Main Content */}
        <Grid
          item
          xs={12}
          lg={9}
          sx={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Add your header content here */}
          </Box>
          {/* Main Content */}
          <Box
            sx={{
              mt: '64px', // Adjust the top margin based on your header height
              p: 2
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};
