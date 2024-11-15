
import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
import { Container, CssBaseline } from "@mui/material";
import AppAppBar from "@/components/AppAppBar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "G12 Sport Club",
  description: "Desenvolvido por Zior Tecnologia - G12 Sport Club",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <AppAppBar />
            <Container
              maxWidth="xl"
              component="main"
              sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 3 }}
            >
              {children}
            </Container>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
