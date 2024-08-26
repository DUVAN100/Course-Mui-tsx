import React, { useState } from 'react';
import { Box, FormControlLabel, Checkbox, FormLabel, FormGroup } from '@mui/material';
import  BookmarkBorderIcon  from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export const MuiCheckBox = () => {
    const [checked, setChecked] = useState(false);
    const [skills, setSkills] = useState<string[]>([])
    console.log("skills", skills)
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {target:{ checked }} = event;
        setChecked(checked);
    }
    const handleSkillsChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        const {target:{ value }} = event;
        const index = skills.indexOf(value);
        if(index === -1)
            setSkills([...skills, value]);
        else
            setSkills(skills.filter(sk => sk !== value))
    }
  return (
    <Box>
        <Box>
            <FormControlLabel
                control={ <Checkbox  name="checkedA" checked={checked} onChange={handleChange}  /> }
                label="I accept the terms and conditions"
            />
        </Box>
        <Box>
            <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>} checked={checked} onChange={handleChange}/>
        </Box>
        <Box>
            <FormLabel>Skills</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={ <Checkbox  name="checkedA" checked={skills.includes('html')} onChange={handleSkillsChange}  /> }
                    value='html'
                    label="HTML"
                />
                <FormControlLabel
                    control={ <Checkbox  name="checkedA" checked={skills.includes('css')} onChange={handleSkillsChange}/> }
                    value='css'
                    label="CSS"
                />
                <FormControlLabel
                    control={ <Checkbox  name="checkedA" checked={skills.includes('js')} onChange={handleSkillsChange}   /> }
                    value='js'
                    label="Javascript"
                />
            </FormGroup>
        </Box>
    </Box>
  )
}
