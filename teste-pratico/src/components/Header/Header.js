import React from 'react'
import {
    AppBar, Box, Typography, IconButton
} from '@mui/material'
import Toolbar from '@mui/material/Toolbar'

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Teste prático
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Header