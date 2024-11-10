import BannerMain from "@/components/BannerMain";
import OndeEstamos from "@/components/OndeEstamos";
import QuemSomos from "@/components/QuemSomos";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <BannerMain src={"/images/banner-main.png"} />
      <QuemSomos />
      <OndeEstamos />
    </Box >
  );
}
