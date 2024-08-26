import React,{ useState} from 'react';
import { Stack, TextField } from '@mui/material';
import { DatePicker } from '@mui/lab';

export const MuiPicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    console.log("selectedDate", selectedDate)
  return (
    <Stack spacing={4} sx={{width:'250px'}}>
        <DatePicker 
          label='Date picker' 
          renderInput={(params:any)=> <TextField {...params}/>}
          value={selectedDate}
          onChange={(event:any, newValue:Date | null) => setSelectedDate(newValue)}
        />
    </Stack>
  )
}
