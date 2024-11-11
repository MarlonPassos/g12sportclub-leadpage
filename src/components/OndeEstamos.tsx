import React from 'react';
import Title from './Title';
import { Box, Stack, Typography } from '@mui/material';

const OndeEstamos = () => {
  return (
    <Box id="onde-estamos" sx={{ paddingTop: '80px' }}>
      <Title text="Onde Estamos" />
      <Stack sx={{ gap: 5 }}>
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
            <Typography variant='h6'>Quadra Coberta</Typography>
            <Typography variant="subtitle1" fontSize={{ xs: 16, sm: 18, md: 20 }}>
              A Quadra Coberta está localizada no coração de Paranoá, em Brasília, em frente à Paróquia Santa Maria dos Pobres. Esse ponto de fácil acesso oferece um ambiente seguro e confortável para a prática de esportes e atividades comunitárias, com a vantagem de estar próximo de um marco importante da região, a Paróquia Santa Maria dos Pobres.
            </Typography>
          </Stack>
          <Box
            width={{ xs: '100%', md: '42%' }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* Mapa incorporado com iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957.3744639489796!2d-47.78034176177644!3d-15.777750665466051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d4114396135%3A0xd795ad151014f056!2sQuadra%20Coberta!5e1!3m2!1sen!2sbr!4v1731283327449!5m2!1sen!2sbr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
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
            <Typography variant='h6'>Campo Sintético de Paranoá</Typography>
            <Typography variant="subtitle1" fontSize={{ xs: 16, sm: 18, md: 20 }}>
              O Campo Sintético de Paranoá está estrategicamente localizado, próximo ao Balão do Itapuã, um dos pontos mais conhecidos da região. Este espaço oferece uma excelente infraestrutura para a prática de esportes, sendo de fácil acesso para quem vem de diferentes partes da cidade. Se você está buscando um local ideal para suas atividades esportivas, venha conhecer o Campo Sintético de Paranoá, com comodidade e qualidade.
            </Typography>
          </Stack>
          <Box
            width={{ xs: '100%', md: '42%' }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* Mapa incorporado com iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957.4624754054047!2d-47.77705589183698!3d-15.75909839429519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d630789c5fd%3A0x27db7b013d6fa854!2sCampo%20Sint%C3%A9tico%20de%20Parano%C3%A1!5e1!3m2!1sen!2sbr!4v1731283429461!5m2!1sen!2sbr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default OndeEstamos;
