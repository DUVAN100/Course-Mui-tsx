import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import CottageIcon from '@mui/icons-material/Cottage';
import SearchIcon from '@mui/icons-material/Search';
import CampaignIcon from '@mui/icons-material/Campaign';
import { useState } from 'react'

export const MuiBottonNavigation = () => {
    const [value, setValue] = useState(0);
  return (
    <BottomNavigation sx={{width:'100%', backgroundColor:'#eeeeee',position:'absolute', bottom:9}} value={value} onChange={(event, newValue)=>{ setValue(newValue)}} showLabels>
        <BottomNavigationAction label="Home" icon={<CottageIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction label="Notifications" icon={<CampaignIcon />} />
    </BottomNavigation>
  )
}
