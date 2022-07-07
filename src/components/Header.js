import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Header(props) {
  function handleMerge() {
    props.onMerge();
  }

  function handleReset() {
    props.onReset();
  }

  function handleCreate() {
    props.onCreate();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sorting Visualizer
          </Typography>

          <Button color="inherit" onClick={handleCreate}>
            Create Array
          </Button>

          <Button color="inherit" onClick={handleReset}>
            Reset
          </Button>

          <Button color="inherit" onClick={handleMerge}>
            Merge
          </Button>
          <Button color="inherit">Quick</Button>
          <Button color="inherit">Bubble</Button>
          <Button color="inherit">Insertion</Button>
          <Button color="inherit">Selection</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
