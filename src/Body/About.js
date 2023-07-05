import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import "./About.css";

function About() {
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(leftCardRef.current);
    observer.observe(rightCardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div align="center" style={{ backgroundColor: "#1B2432" }}>
        <Typography
          pt={"50px"}
          pb={"36px"}
          style={{ color: "#FFFFFF" }}
          variant="h4"
          className="fade-in"
        >
          Nuestros socios
        </Typography>
        <div style={{ maxWidth: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="fade-in-left" ref={leftCardRef}>
              <Box sx={{ marginBottom: "89px", textAlign: "justify" }}>
                <Card
                  sx={{
                    marginLeft: { xs: "30px", md: "101px" },
                    marginRight: { xs: "30px", md: "101px" },
                    marginTop: "35px",
                  }}
                >
                  <Grid container>
                    <Grid item xs={12} sm={6} md={6}>
                      <CardContent
                        sx={{
                          marginLeft: {
                            xs: "10px",
                            sm: "1px",
                            md: "48px",
                          },
                          marginTop: "66px",
                        }}
                      >
                        <Typography variant="h3" align="left">
                          <b>Antonio</b>
                        </Typography>
                        <Typography variant="h6" align="left">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum
                        </Typography>
                      </CardContent>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      sx={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: { xs: "100%", sm: "80%", md: "100%" },
                          height: { xs: "100%", sm: "80%", md: "100%" },
                          maxHeight: "500px",
                          margin: { xs: "30px", sm: "5px", md: "20px" },
                        }}
                        image="https://food.novaterr.com/wp-content/uploads/2018/07/hestia-lawyers-testimonial2.jpg"
                      />
                    </Grid>
                  </Grid>
                </Card>
              </Box>
            </div>
            <div className="fade-in-right" ref={rightCardRef}>
              <Box sx={{ textAlign: "justify" }}>
                <Card
                  sx={{
                    marginLeft: { xs: "30px", md: "101px" },
                    marginRight: { xs: "30px", md: "101px" },
                    marginBottom: "89px",
                  }}
                >
                  <Grid container>
                    <Grid item xs={12} sm={6} md={6}>
                      <CardContent
                        sx={{
                          marginLeft: {
                            xs: "10px",
                            sm: "1px",
                            md: "48px",
                          },
                          marginTop: "66px",
                          marginBottom: "98px",
                        }}
                      >
                        <Typography variant="h3" align="left">
                          <b>Raul</b>
                        </Typography>
                        <Typography variant="h6" align="left">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum
                        </Typography>
                      </CardContent>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      sx={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: { xs: "100%", sm: "80%", md: "100%" },
                          height: { xs: "100%", sm: "80%", md: "100%" },
                          maxHeight: "500px",
                          margin: { xs: "30px", sm: "5px", md: "20px" },
                        }}
                        image="https://s3-media0.fl.yelpcdn.com/bphoto/3pPowLvWKRAIWd9-pAcJJA/1000s.jpg"
                      />
                    </Grid>
                  </Grid>
                </Card>
              </Box>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default About;
