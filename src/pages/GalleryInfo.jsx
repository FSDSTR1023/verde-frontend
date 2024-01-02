import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

export const GalleryInfo = () => {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="325"
          height="225"
          image="https://s3-alpha-sig.figma.com/img/b7b4/4fc0/8defe602e9a6b12262560ae3d7a980d6?Expires=1705276800&Signature=awnnt~ie2Ff3smGvcietPIrNHLW0oLbg5joR1AYjjEBUupBtYV7RInbrVIeSRm-UZhM0OmJwLNSKpb2MBmEEJGfpYbfh6801SJsM22HM0xRO3~rqcdr8-KbSgMyF6o7a6SUSdXrpAqRaRMWWEiIYSJyjibpfcJ5UVdyulodckqK2mL0oDcoDTqZW7NqLZh3lZHUN-hGZMKv82C88GHKqSIY2nuxVjpMX083F2CiQ5FCNruRepK7eXBRdz578FkiPG9KF5CEHaN4dGPcMhKhDUIkcuFopjXfor~vycdSA5NLgmNVyjF~V5ql4gq20zWs6jYbIMTNvUV4eFamRBiLCOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="foto"
          sx={{ m: 1 }}
        />
      </CardActionArea>
      <CardActions>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            LUCÍA Y MARIO
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lucía Casado Hernández
          </Typography>
          <Typography variant="body2" color="text.secondary">
            lucasher24@gmail.com
          </Typography>
        </CardContent>

        <CardContent display="flex" flexDirection="row">
          <Typography variant="body2" color="text.secondary">
            35
          </Typography>
          <CameraAltIcon />
        </CardContent>
      </CardActions>
    </Card>
  );
};
