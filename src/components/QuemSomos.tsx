import React from 'react';
import Title from './Title';
import { Box, Stack, Typography } from '@mui/material';

export default function QuemSomos() {
  return (
    <Box id="quem-somos" sx={{ paddingTop: '80px' }}>
      <Title text="Quem Somos" />
      <Stack
        direction={{ xs: 'column', md: 'row' }} // Mudando a direção dependendo do tamanho da tela
        mt={2}
        spacing={4} // Reduzindo o espaçamento entre os elementos em telas menores
      >
        <Stack
          direction="column"
          width={{ xs: '100%', md: '58%' }} // A largura é 100% no mobile e 58% no desktop
          sx={{ gap: 2 }}
        >
          <Typography variant="subtitle1" fontSize={{ xs: 16, sm: 18, md: 20 }}>
            O G12 Sport Club é uma escolinha de futebol que vai além do esporte. Fundado com a missão de transformar
            vidas, nosso foco é proporcionar um ambiente onde crianças e jovens possam aprender, crescer e se
            desenvolver tanto dentro quanto fora do campo. Acreditamos que o futebol é uma poderosa ferramenta para
            ensinar disciplina, respeito, trabalho em equipe e perseverança.
          </Typography>
          <Typography variant="subtitle1" fontSize={{ xs: 16, sm: 18, md: 20 }}>
            Nossa filosofia é formar atletas completos, mas, mais importante ainda, cidadãos responsáveis e
            comprometidos com o seu futuro. Aqui, o aprendizado vai além das habilidades técnicas, com ênfase na
            educação e no desenvolvimento emocional de cada aluno. Em cada treino, buscamos incentivar a superação e
            o trabalho coletivo, preparando nossos jogadores para os desafios da vida.
          </Typography>
          <Typography variant="subtitle1" fontSize={{ xs: 16, sm: 18, md: 20 }}>
            No G12 Sport Club, todos têm a oportunidade de crescer e se destacar, seja como atleta, seja como
            pessoa. Nosso compromisso é com o futuro de cada jovem que passa por aqui, ajudando-os a alcançar seus
            sonhos e a se tornarem referências em sua comunidade.
          </Typography>
        </Stack>
        <Box
          width={{ xs: '100%', md: '42%' }} // Largura 100% no mobile, 42% no desktop
          sx={{
            display: 'flex',
            justifyContent: 'center', // Centraliza a imagem no espaço disponível
          }}
        >
          <Box
            component="img"
            src={"/images/historia-g12.png"}
            alt="Imagem da História G12"
            sx={{
              width: '100%', // A imagem ocupa toda a largura do contêiner
              maxHeight: { xs: '200px', sm: '300px', md: '500px' }, // Altura máxima responsiva
              height: 'auto', // Ajuste automático da altura para manter a proporção
              objectFit: 'cover', // Preenche o contêiner sem distorcer a imagem
              display: 'block', // Remove o espaço ao redor da imagem
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
}
