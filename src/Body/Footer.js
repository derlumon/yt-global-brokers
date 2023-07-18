import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import logo from '../img/Logo/YTBrokersLogoGrisClaro.png'

export default function Footer() {
  const footerStyle = {
    backgroundColor: '#000',
    color: '#D3D3D3',
    bottom: 0,
    left: 0,
    width: '100%',
  };
  return (
    <footer style={footerStyle}>
      <Container sx={{ py: 4 }}>
        <Grid container justifyContent="center" alignItems="center" borderBottom={1} sx={{ pb: 4 }}>
          <Grid item xs={12} lg={6} textAlign="center" sx={{ mb: { xs: 2, lg: 0 } }}>
          <img src={logo} alt="Logo" style={{ width: '100%', maxWidth: '100px' }} />
          </Grid>
    
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h6" sx={{ mb: 2 }}>
              YT, GLOBAL BROKERS
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="h6" component="h6" sx={{ mb: 2 }}>
              SERVICIOS
            </Typography>
            <Typography variant="body2" color="inherit">
              <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Opciones Legales
              </Link>
              <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Opciones contables
              </Link>
              <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Opciones administrativa
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="h6" component="h6" sx={{ mb: 2 }}>
              lINKS
            </Typography>
            <Typography variant="body2" color="inherit">
              <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Inicio
              </Link>
              <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Servicios Legales
              </Link>
              <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Areas de practica
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h6" sx={{ mb: 2 }}>
              CONTACTO
            </Typography>
            <Typography variant="body2" color="inherit">
              <Typography component="span" variant="body2" color="inherit" sx={{ display: 'block' }}>
                Lago Zurich 219-Piso 12, Amp Granada, Miguel Hidalgo, 11529 Ciudad de México
              </Typography>
              <Typography component="span" variant="body2" color="inherit" sx={{ display: 'block' }}>
                contacto@yt-global-brokers.com
              </Typography>
              <Typography component="span" variant="body2" color="inherit" sx={{ display: 'block' }}>
                +52 55 4124 0055
              </Typography>
              <Typography component="span" variant="body2" color="inherit" sx={{ display: 'block' }}>
                +52 55 6985 7670
              </Typography>
            </Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" sx={{ pt: 4 }}>
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()}{' '}
            <Link href="https://mdbootstrap.com/" color="inherit" sx={{ fontWeight: 'bold' }}>
              Yt, GLOBAL BROKERS
            </Link>
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
}