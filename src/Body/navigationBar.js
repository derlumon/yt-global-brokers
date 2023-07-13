import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  transition: theme.transitions.create(['background-color', 'color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
  backgroundColor: 'transparent',
  color: '#ffffff',
  '&.solid': {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
}));

const NavigationBar = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  useEffect(() => {
    setIsTransparent(trigger);
  }, [trigger]);

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <StyledAppBar position="fixed" className={isTransparent ? '' : 'solid'}>
        <Toolbar>
          <Typography variant="h6">Logo</Typography>
          {/* Agrega los elementos de navegación adicionales aquí */}
        </Toolbar>
      </StyledAppBar>
    </ThemeProvider>
  );
};

export default NavigationBar;