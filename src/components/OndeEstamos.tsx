import React from 'react';
import Title from './Title';
import { Box, Stack, Typography } from '@mui/material';

export default function OndeEstamos() {
  return (
    <Box id="onde-estamos" sx={{ paddingTop: '80px' }}>
      <Title text="Onde Estamos" />
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        mt={2}
        spacing={4}
        alignContent="center"
        alignItems="center"
      >
        <Box
          width={{ xs: '100%', md: '42%' }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src={"/images/mapa.png"}
            alt="Imagem da História G12"
            sx={{
              width: '100%',
              maxHeight: {
                xs: '200px', sm: '300px'
              },
              height: 'auto',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
        <Stack
          direction="column"
          width={{ xs: '100%', md: '58%' }}
          sx={{ gap: 2 }}
        >
          <Typography variant="subtitle1" fontSize={{ xs: 16, sm: 18, md: 20 }}>
            O G12 Sport Club está localizado no coração da cidade, em um ambiente acessível e rodeado pela natureza, o que proporciona um espaço ideal para o desenvolvimento esportivo e pessoal de nossos alunos. Estamos situados na Avenida das Palmeiras, 2500, em um bairro tranquilo e seguro, com fácil acesso a transporte público e várias comodidades, como praças e centros comerciais.
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        mt={2}
        spacing={4}
        alignContent="center"
        alignItems="center"
      >
        <Stack
          direction="column"
          width={{ xs: '100%', md: '58%' }}
          sx={{ gap: 2 }}
        >
          <Typography variant="subtitle1" fontSize={{ xs: 16, sm: 18, md: 20 }}>
            O G12 Sport Club está localizado no coração da cidade, em um ambiente acessível e rodeado pela natureza, o que proporciona um espaço ideal para o desenvolvimento esportivo e pessoal de nossos alunos. Estamos situados na Avenida das Palmeiras, 2500, em um bairro tranquilo e seguro, com fácil acesso a transporte público e várias comodidades, como praças e centros comerciais.
          </Typography>
        </Stack>
        <Box
          width={{ xs: '100%', md: '42%' }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src={"/images/mapa.png"}
            alt="Imagem da História G12"
            sx={{
              width: '100%',
              maxHeight: {
                xs: '200px', sm: '300px'
              },
              height: 'auto',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
}
