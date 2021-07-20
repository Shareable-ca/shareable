import React from "react";
import "./App.css";

import {
  Typography,
  Card,
  CardActions,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
  ButtonBase,
  Button,
} from "@material-ui/core/";

// importing components
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <>
      <div className="App">
        <CssBaseline />
        <Navbar />
      </div>
      <main>
        <div>
          <Container></Container>
        </div>
      </main>
    </>
  );
}

export default App;
