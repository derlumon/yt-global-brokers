import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

const images = [
  {
    url: 'https://www.gruporedes.com.mx/wp-content/uploads/2018/07/4-abogado.jpg',
    title: 'Opciones Legales en Mexico',
    width: '33.33%',
    to:"/practiceArea/legalOptions"
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/03/05/20/00/accountant-1238598_640.jpg',
    title: 'Opciones Contables en Mexico',
    width: '33.33%',
    to:"/practiceArea/accountingOptions"
  },
  {
    url: 'https://www.activa.cl/wp-content/uploads/2020/11/Administracion-de-propiedades.jpg',
    title: 'Opciones Admnistracion Inmobiliaria en Mexico',
    width: '33.33%',
    to:"/practiceArea/administrativeOptions"
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
    height: 150,
    maxWidth: '100%',
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '2px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  
  backgroundColor: theme.palette.common.white,

  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBaseDemo() {
  return (
    <Box display={"flex"} justifyContent="center" alignItems="center " sx={{width:"100%"}}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' ,alignItems:"center",justifyContent:"center"}}>
        {images.map((image) => (
          <ImageButton
            component={Link}
            to={image.to} 
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="h4"
                align='center'
                color="inherit"
                alignItems={"center"}
                sx={{
                  position: 'relative',
                  paddingX: "1rem",
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
    </Box>
  );
}
