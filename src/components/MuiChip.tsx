import { Stack, Chip, Avatar } from "@mui/material";
import { useState } from "react";
import TagFacesIcon from '@mui/icons-material/TagFaces';
export const MuiChip = () => {
    const [chips, setChips] = useState(['chip1', 'chip2', 'chip3', 'chip4', 'chip5'])
    const handleDeleteChip = (chip:string) => {
        setChips(chips.filter((c) => c!== chip))
    }
  return (
    <>
        <Stack direction='row' spacing={2}>
            <Chip label='Apple' color='primary' variant='outlined' size="small"/>
            <Chip label='Banana' color='secondary' variant='outlined'/>
            <Chip label='Cherry' color='success' variant='outlined'/>
            <Chip label='Date' color='info' variant='outlined'/>
            <Chip label='Elderberry' color='error' variant='outlined'/>
            <Chip label='Fig' color='warning' variant='outlined'/>
            <Chip label='Grape' color='default' variant='outlined'/>
            <Chip label='Honeydew' color='success' variant='filled'/>
            <Chip label='Iced tea' color='info' variant='filled'/>
            <Chip label='Jackfruit' color='error' variant='filled'/>
            <Chip label='Kiwi' color='warning' variant='filled'/>
            <Chip label='Lemon' color='primary' variant='filled'/>
        </Stack>
        <Stack direction='row' spacing={2} mt={10}>
            <Chip label='Avatar' color='primary' variant='outlined' size="small" avatar={<Avatar>DV</Avatar>}/>
            <Chip label='Icon' color='primary' variant='outlined' size="small" icon={<TagFacesIcon/>}/>
            <Chip label='Click' color='success' variant='filled' size="medium" onClick={()=> alert("Click")}/>
            <Chip label='Delete' color='error' variant='filled' size="medium" onDelete={()=> alert("Deleted")}/>
        </Stack>
        <Stack direction='row' spacing={2} mt={10}>
            { chips.map((chip, index) => <Chip key={index} label={chip} variant='outlined' size="small" onClick={()=> alert(`Clicked chip: ${chip}`)} onDelete={()=> handleDeleteChip(chip)}/>)}
        </Stack>
    </>
  )
}
