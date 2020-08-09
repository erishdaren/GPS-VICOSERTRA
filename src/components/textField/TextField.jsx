import React from "react";
import "./textfield.css";
import {
  TextField,
  FormControl,
  FormLabel,
  FormGroup,
} from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";

const TextFiel = ({ label }) => {
  return (
    <StylesProvider injectFirst>
      <FormControl component="fieldset">
        <FormLabel component="legend"></FormLabel>
        <FormGroup>
          <TextField label={label} />
        </FormGroup>
      </FormControl>
    </StylesProvider>
  );
};

export default TextFiel;
