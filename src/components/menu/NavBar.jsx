import React from 'react'
import {
   AppBar,
   Toolbar,
   Typography
  } from "@material-ui/core";
import './navbar.css'
import { StylesProvider } from "@material-ui/styles";

export default function NavBar() {
    return (
        
          <StylesProvider injectFirst>
          <AppBar position="static" color="primary">
              <Toolbar>
                
                <Typography variant="h6">
                  Menu
                </Typography>
               
              </Toolbar>
            </AppBar>
          </StylesProvider>
            
        
    )
}
