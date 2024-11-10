import BannerMain from "@/components/BannerMain";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <BannerMain src={"/images/banner-main.png"} />
    </Box>
  );
}
