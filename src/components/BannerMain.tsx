import { Box } from '@mui/material'
import React from 'react'

interface BannerMainProps {
  src: string;
  alt?: string;
}
export default function BannerMain({ src, alt }: BannerMainProps) {
  return (
    <div>
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: '100%',             // A imagem ocupa toda a largura do contêiner
          maxHeight: { xs: '200px', sm: '300px', md: '400px' }, // Altura máxima responsiva
          height: 'auto',             // Ajuste automático da altura para manter a proporção
          objectFit: 'cover',         // Preenche o contêiner sem distorcer a imagem
          display: 'block',           // Remove o espaço ao redor da imagem
        }}
      />
    </div>
  )
}
