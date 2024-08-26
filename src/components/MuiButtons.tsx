import React, { useState } from 'react'; 
import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderLineIcon from '@mui/icons-material/FormatUnderlined';

export const MuiButtons = () => {
    // const [fomrats, setFormats] = useState<string[]>([]);
    const [fomrats, setFormats] = useState<string | null>(null);
    console.log({fomrats});
    const handleFormarChange = (_event:React.MouseEvent<HTMLElement>, UpdatesFormats:string | null) => setFormats(UpdatesFormats);
  return (
    <Stack spacing={4} >
        <Stack spacing={2} direction='row'>
            <Button variant="text" color="primary">Text</Button>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" disabled>Disabled</Button>
            <Button variant="outlined" color="primary">Outlined</Button>
            <Button variant="contained">Default</Button>
        </Stack>
        <Stack spacing={2} direction='column'  sx={{ maxWidth: '300px', marginTop:'20px' }} >
            <Button variant="contained" size="small">Small</Button>
            <Button variant="contained" size="large">Large</Button>
            <Button variant="contained" href="#contained-buttons">Link</Button>
            <Button variant="contained" color="primary" disabled>Disabled</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='success'>Success</Button>
        </Stack>
        <Stack spacing={2} direction='row' display='block'>
            <Button variant='contained' color='primary' size='small'>Small Primary</Button>
            <Button variant='contained' color='primary' size='medium'>Small Primary</Button>
            <Button variant='contained' color='primary' size='large'>Large Primary</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary' startIcon={<SendIcon />} disableElevation>Send</Button>
            <Button variant='contained' color='primary' endIcon={<SendIcon />} disableRipple onClick={() => alert("Hellow")}>Send</Button>
            <IconButton aria-label='send' sx={{color:'#76ff03'}} size='small'>
                <SendIcon/>
            </IconButton>
        </Stack>
        <Stack direction='row'>
            <ButtonGroup variant='outlined' color='secondary' orientation='vertical' size='small' aria-label='alignment button group' >
                <Button onClick={()=> alert('clcik left')}>left</Button>
                <Button onClick={()=> alert('clcik center')}>center </Button>
                <Button onClick={()=> alert('clcik rigth')}>rigth</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction='row'>
            <ToggleButtonGroup value={fomrats} size='large' color='success' aria-label='text formating' onChange={handleFormarChange} orientation='vertical' exclusive>
                <ToggleButton value='bold' title='bold' aria-label='bold'>
                    <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value='italic' title='italic' aria-label='italic'>
                    <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value='underlined' title='underlined' aria-label='underlined'>
                    <FormatUnderLineIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}
