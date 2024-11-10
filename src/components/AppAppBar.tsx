"use client";
import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { Link as ScrollLink } from 'react-scroll';

const pages = ['Quem Somos', 'Onde Estamos', 'Equipe', 'Parceiros'];

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  '@media all': {
    minHeight: 90,
  },
}));

export default function AppAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" color="primary">
      <Container maxWidth="xl">
        <StyledToolbar>
          <Box
            component="img"
            src="/images/logo-512x512.png"
            alt="Logo"
            sx={{ height: 84, display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, ml: 5 }}
          >
            <Box
              component="img"
              src="/images/logo-512x512.png"
              alt="Logo"
              sx={{
                height: 60,
              }}
            />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <ScrollLink
                      to={page.toLowerCase().replace(' ', '-')}  // O "to" corresponde ao ID da seção
                      smooth={true}
                      duration={500}
                      offset={-70}  // Ajuste da posição para considerar o AppBar fixo
                      color="inherit"
                      style={{ textDecoration: 'none' }}
                    >
                      {page}
                    </ScrollLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Stack direction="row" spacing={10} justifyContent="center">
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'inherit' }}
                >
                  <ScrollLink
                    to={page.toLowerCase().replace(' ', '-')}  // O "to" corresponde ao ID da seção
                    smooth={true}
                    duration={500}
                    offset={-70}  // Ajuste da posição para considerar o AppBar fixo
                    color="inherit"
                    style={{ textDecoration: 'none' }}
                  >
                    {page}
                  </ScrollLink>
                </Button>
              ))}
            </Stack>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
