import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Copyright } from "../components/Copyright";
import { Link } from "react-router-dom";

export function SignIn() {

  const handleSubmit = async (event) => {

    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log({
      name: data.get("name"),
      surname: data.get("surname"),
      email: data.get("email"),
      password: data.get("password"),
    });

    const dataToDB = {
      name: data.get("name"),
      surname: data.get("surname"),
      email: data.get("email"),
      password: data.get("password"),
    };

    const response = await fetch(
      "http://localhost:5000/photographer/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToDB),
      }
    );

    console.log(await response.json());
  };

  return (
    <Grid container component="main" sx={{ width: "60vw" }}>
      {/* <CssBaseline /> */}
      <Grid
        item
        xs={false}
        md={6}
        sx={{
          backgroundImage:
            "url(https://source.unsplash.com/random?wallpapers)", //? Esta imagen tarda en cargar. Podemos poner una imagen descargada para que sea más rápido?
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} md={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Crear cuenta
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nombre"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="surname"
              label="Apellidos"
              name="surname"
              autoComplete="surname"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Repita la contraseña"
              type="password"
              id="repassword"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Crear cuenta
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='/login'>
                  ¿Ya tienes cuenta? Entrar
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
