import { Box, AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const MuiNadvar = () => {
    const [anchoEñ, setAnchoEñ] = useState<null | HTMLElement>(null);
    let open = Boolean(anchoEñ);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchoEñ(event.currentTarget);
    }
    const handleClose = () => {
        setAnchoEñ(null);
    }
  return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                <CatchingPokemonIcon sx={{ mr: 2 }} />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap component='div' sx={{flexGrow:1}}>
                Pokemon app
            </Typography>
            <Stack direction='row' spacing={2}>
                <Button color='inherit'>Features</Button>
                <Button color='inherit'>Pricing</Button>
                <Button color='inherit'>About</Button>
                <Button 
                    color='inherit' 
                    id='resources-button' 
                    onClick={handleClick} 
                    aria-controls={open?'resources-menu':undefined}
                    aria-haspopup='true'
                    aria-expanded={open?'false':undefined}
                    endIcon={<ExpandMoreIcon/>}
                >Resources</Button>
                <Button color='secondary'>Log out</Button>
            </Stack>
            <Menu id="simple-menu" anchorEl={anchoEñ} keepMounted open={open} MenuListProps={{
                'aria-labelledby':'resources-button'
            }}
            onClose={handleClose}
            anchorOrigin={{vertical :'bottom',horizontal:'right'}}
            transformOrigin={{vertical :'top',horizontal:'right'}}>
                <MenuItem onClick={handleClose}>Blog</MenuItem>
                <MenuItem onClick={handleClose}>Podcast</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
  )
}
