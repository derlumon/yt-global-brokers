import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
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
    <Box sx={{ width: { md: "80%" }, m: { xs: "25px" }, ml:{md:"150px"}, pt:'50px',textAlign: "center"}}>
      <Typography variant="h4" align="center" gutterBottom>
        <b>Contact Us</b>
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
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="inherit" fullWidth>
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactForm;
