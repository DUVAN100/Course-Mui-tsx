import React from 'react'
import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export const MuiList = () => {
  return (
    <Box sx={{width:'400px', bgcolor:'pink'}}>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <EmailIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>    
                    <ListItemText primary="Primary Text 1" secondary="Secondary Text 1" />
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <EmailIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>  
                    <ListItemText primary="Primary Text 2" secondary="Secondary Text 2" />
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <EmailIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>  
                    <ListItemText primary="Primary Text 3" secondary="Secondary Text 3" />
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
  )
}
