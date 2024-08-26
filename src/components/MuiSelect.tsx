import React, { useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';


export const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([]);

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const {target:{value}} = event;
        setCountries(typeof(value)==='string'?value.split(','):value);
    }
  return (
    <Box width='200px'>
        <TextField label='Select country' select value={countries} onChange={handleChange} fullWidth 
            SelectProps={{multiple: true}}
            color='secondary'
            size='small'
            helperText='Please select a country'
            error={countries.length > 0?false:true}
        >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='CO'>Colombia</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
        </TextField>
    </Box>
  )
}
