import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phoneNumber: "",
    legalProblem: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Construct the email content
    const emailContent = `
      Name: ${formData.name}
      Address: ${formData.address}
      Email: ${formData.email}
      Phone Number: ${formData.phoneNumber}
      Legal Problem: ${formData.legalProblem}
    `;

    // Send the email
    window.location.href = `mailto:contacto@yt-global-brokers.com?subject=Contact Form Submission&body=${encodeURIComponent(
      emailContent
    )}`;
  };

  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Box
        sx={{
          backgroundColor: "#848688",
          justifyContent: "center",
          alignContent:"center"
        }}
      >
        <Typography variant="h4" gutterBottom color="white" fontFamily="Rubik "alignContent="center" sx={{padding:{md:"3rem",xs:"2rem"}}}>
        ¡Contáctenos ahora y conozca más de nuestros servicios!
        </Typography>
      </Box>
      <Box sx={{paddingX:{xs:"5%",md:"10%"},paddingY:"5%"}}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nombre"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Dirección"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Número de teléfono"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descripción del problema legal"
                name="legalProblem"
                multiline
                rows={4}
                value={formData.legalProblem}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
              {/* Placeholder Grid item to occupy the space on larger screens */}
            </Grid>
            <Grid item xs={12} position={"initial"}>
              <Button
                type="submit"
                variant="contained"
                color="inherit"
                fullWidth
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
