import { useState } from 'react';
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material'

export const MiuRadioButton = () => {
    const [value, setValue] = useState('0-2');
    const handleChange= (event:React.ChangeEvent<HTMLInputElement>) => {
        const {target:{value}} = event;
        setValue(value)
    }
  return (
    <Box>
        <Box>
            <FormControl error >
                <FormLabel id='job-experience-group-label'>Years of experience</FormLabel>
                <RadioGroup name='job-experience-group' aria-labelledby='job-experience-group-label' value={value} onChange={handleChange}>
                    <FormControlLabel control={<Radio size='small' color='secondary'/>} label='0-2' value='0-2'/>
                    <FormControlLabel control={<Radio size='medium' color='secondary'/>} label='3-5' value='3-5'/>
                    <FormControlLabel control={<Radio style={{ fontSize: 30 }} color='secondary'/>} label='6-10' value='6-10'/>
                </RadioGroup>
                <FormHelperText>Select your years of experience</FormHelperText>
            </FormControl>
        </Box>
    </Box>
  )
}
