import React from "react";
import "./Login.css";
import { StylesProvider } from "@material-ui/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Grid, TextField, Typography, Button, Link } from "@material-ui/core";
import imagen from "./images/VICOSERTRA.png";
const Login = () => {
  return (
    <StylesProvider injectFirst>
      <div>
        <Grid container className="logo">
          <Grid item xs={12} md={6}>
            <div className="imagen">
              <img src={imagen} alt="" />
            </div>
          </Grid>

          <Grid container item xs={12} md={6} className="formulario">
            <AccountCircleIcon />

            <Typography variant="h3" color="initial">
              BIENVENIDO
            </Typography>
            <TextField type="text" label="Usuario" variant="standard"/>

            <TextField
            variant="standard"
              type="password"
              autoComplete="current-password"
              label="Contraseña"
            />
            <Typography className="recoverpsw">
              <Link href="#"> ¿Olvidó su contraseña? De click aquí. </Link>
            </Typography>

            <Button variant="contained" color="default">
              Iniciar
            </Button>
          </Grid>
        </Grid>
      </div>
    </StylesProvider>
  );
};

export default Login;
