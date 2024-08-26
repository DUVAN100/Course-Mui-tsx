import { useState } from 'react'
import { Stack, Autocomplete, TextField } from '@mui/material';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js', 'MongoDB', 'Python', 'Django', 'Flask', 'SQL', 'NoSQL', 'Docker', 'Kubernetes', 'AWS',       'GCP', 'Azure', 'CI/CD', 'Testing', 'Debugging', 'Version Control', 'Agile Methodologies', 'UX/UI Design', 'Project Management', 'Teamwork', 'Leadership', 'Time Management']

type Skill = {
  id: number,
  label: string,
}

const skillsOptions = skills.map((skill, index) =>({
  id: index + 1,
  label: skill,
}))

export const MuiAutoComplete = () => {
  const [value, setValue] = useState<string|null>(null);
  const [skill, setSkill] = useState<Skill |null>(null);  
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  console.log("value", value)
  console.log("skill", skill)
  console.log("selectedSkills", selectedSkills)
  
  return (
    <Stack spacing={2} width={'250px'}>
        <Autocomplete
            id="Autocomplete-one"
            options={skills}
            getOptionLabel={(option) => option}
            renderInput={(params) => <TextField {...params} label="Skills" variant="standard" />}
            sx={{color:"aqua"}}
            onChange={(event:any, newValue:string | null) => setValue(newValue)}
            value={value}
            freeSolo
        />
        <Autocomplete
            id="Autocomplete-two"
            options={skillsOptions}
            getOptionLabel={(option:Skill) => option.label}
            renderInput={(params) => <TextField {...params} label="Skills" variant="standard" />}
            sx={{color:"aqua"}}
            onChange={(event:any, newValue:Skill | null) => setSkill(newValue)}
            value={skill}
        />
        <Autocomplete
            id="autocomplete-skills"
            multiple
            options={skillsOptions}
            getOptionLabel={(option: Skill) => option.label}
            renderInput={(params) => <TextField {...params} label="Skills" variant="standard" />}
            onChange={(event: any, newValue: Skill[]) => setSelectedSkills(newValue)}
            value={selectedSkills}
            sx={{ color: 'aqua' }}
          />
    </Stack>
  )
}
