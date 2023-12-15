import { Link, Typography } from "@mui/material";

export const Copyright = (props) => {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://github.com/FSDSTR1023/verde-frontend">
                Piclery
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}