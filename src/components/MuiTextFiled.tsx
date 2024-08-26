import { useState }from 'react';
import { Stack, TextField, InputAdornment } from '@mui/material';

export const MuiTextFiled = () => {
    const [value, setValue] = useState('');
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <TextField label='Name' variant='outlined'/>
            <TextField label='e-mail' variant='filled'/>
            <TextField label='Phone' variant='standard'/>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Small and secondary' size='small' color='secondary' variant='outlined'/>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Form input' required disabled/>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Form input' required/>
            <TextField 
                label='Password'
                type='password' 
                helperText='Do not share your password with anyone'
                required
            />
            <TextField label='Read only' InputProps={{readOnly:true}}/>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField 
                label='Password 2'   
                value={value} 
                onChange={({target:{value}})=> setValue(value)} 
                required 
                error={!value} 
                helperText={!value?'this field is required':'Do not share your password with anyone'}/>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Amout' InputProps={{
                startAdornment:<InputAdornment position='start'>$</InputAdornment>
            }}/>
            <TextField label='weigth' InputProps={{
                endAdornment:<InputAdornment position='end'>kg</InputAdornment>
            }}/>
        </Stack>
    </Stack>
  )
}
