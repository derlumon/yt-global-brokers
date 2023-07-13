import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { Language as Languageicon } from "@mui/icons-material";
import Button from "./Button";
import './servicios.css'
export default function Servicios() {

  return (
    <div  className="servicios" align="center" >
      <Typography variant="h2" sx={{ fontSize: { xs: "24px", sm: "32px", md: "48px" } ,py:"40px"}}>
        <b> Our Practive Area</b>
      </Typography>

      <Grid container spacing={{ xs: 4, md: -35 }} sx={{ padding: "12px", ml:{xs:"-15px"} }}>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            icon={<Languageicon />}
            title="Contract Drafting & Review"
            lista1="Sales & Purchase Agreement (SPA)"
            lista2="Non-Disclosure Agreement (NDA)"
            lista3="Manufacturing Agreement (NNN)"
            lista4="Supplier OEM Agreement (OEM)"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            icon={<Languageicon />}
            title="Contract Drafting & Review"
            lista1="Sales & Purchase Agreement (SPA)"
            lista2="Non-Disclosure Agreement (NDA)"
            lista3="Manufacturing Agreement (NNN)"
            lista4="Supplier OEM Agreement (OEM)"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            icon={<Languageicon />}
            title="Contract Drafting & Review"
            lista1="Sales & Purchase Agreement (SPA)"
            lista2="Non-Disclosure Agreement (NDA)"
            lista3="Manufacturing Agreement (NNN)"
            lista4="Supplier OEM Agreement (OEM)"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            icon={<Languageicon />}
            title="Contract Drafting & Review"
            lista1="Sales & Purchase Agreement (SPA)"
            lista2="Non-Disclosure Agreement (NDA)"
            lista3="Manufacturing Agreement (NNN)"
            lista4="Supplier OEM Agreement (OEM)"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            icon={<Languageicon />}
            title="Contract Drafting & Review"
            lista1="Sales & Purchase Agreement (SPA)"
            lista2="Non-Disclosure Agreement (NDA)"
            lista3="Manufacturing Agreement (NNN)"
            lista4="Supplier OEM Agreement (OEM)"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            icon={<Languageicon />}
            title="Contract Drafting & Review"
            lista1="Sales & Purchase Agreement (SPA)"
            lista2="Non-Disclosure Agreement (NDA)"
            lista3="Manufacturing Agreement (NNN)"
            lista4="Supplier OEM Agreement (OEM)"
          />
        </Grid>
      </Grid>
    </div>
  );
}
