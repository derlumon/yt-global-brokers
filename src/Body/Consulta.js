import React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import './ComponenteConsulta.css';

const ComponenteConsulta = () => {
  return (
    <Box className="componente-consulta">
      <div className="columna animate">
        <img
          src="https://static.wixstatic.com/media/72c81fa1cf5c343bb7b80ea53eac2eb9.jpg/v1/fill/w_461,h_300,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/72c81fa1cf5c343bb7b80ea53eac2eb9.jpg"
          alt="Imagen izquierda arriba"
          className="imagen"
        />
        <Card className="card" style={{ backgroundColor: '#343434' }}>
          <CardContent>
            <Typography variant="h4" className="card-title" style={{ margin: '15px' }}>
              Consultation for Legal Entities Formation in China
            </Typography>
            <Typography variant="body1" className="card-contact-us" style={{ marginTop: '60px', marginLeft: '15px' }}>
              Contact Us
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="columna animate">
        <Card className="card" style={{ backgroundColor: '#535353' }}>
          <CardContent>
            <Typography variant="h4" className="card-title" style={{ margin: '15px' }}>
              Legal Consultation for International Trade Issues
            </Typography>
            <Typography variant="body1" className="card-contact-us" style={{ marginTop: '90px', marginLeft: '15px' }}>
              Contact Us
            </Typography>
          </CardContent>
        </Card>
        <img
          src="https://static.wixstatic.com/media/28d63b431eff4c7b82da1b3913cab749.jpg/v1/fill/w_461,h_300,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/28d63b431eff4c7b82da1b3913cab749.jpg"
          alt="Imagen derecha abajo"
          className="imagen"
        />
      </div>
      <img
        src="https://static.wixstatic.com/media/b4ab2e3cb4704a6b8d16f28e49bd2b01.jpg/v1/fill/w_722,h_440,fp_0.36_0.33,q_80,usm_0.66_1.00_0.01,enc_auto/b4ab2e3cb4704a6b8d16f28e49bd2b01.jpg"
        alt="Imagen derecha"
        className="imagen-ocultar-en-tablet"
      />
    </Box>
  );
};

export default ComponenteConsulta;
