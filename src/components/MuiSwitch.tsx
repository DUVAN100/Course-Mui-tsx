import React, { useState } from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';

export const MuiSwitch = () => {
  const [switchState, setSwitchState] = useState({
    darkMode: false,
    secondary: false,
    success: false,
    warning: false,
    error: false,
    info: false,
    default: false,
  });
  

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const {target:{ name, checked }} = event;
    setSwitchState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <Box>
      <FormControlLabel
        control={ <Switch name="darkMode" color="primary" checked={switchState.darkMode} onChange={handleChange} />}
        label="Dark mode"
      />
      <FormControlLabel
        control={ <Switch name="secondary" color="secondary" checked={switchState.secondary} onChange={handleChange}/>}
        label="Secondary"
      />
      <FormControlLabel
        control={ <Switch name="success" color="success" checked={switchState.success} onChange={handleChange} />}
        label="Success"
      />
      <FormControlLabel
        control={ <Switch name="warning" color="warning" checked={switchState.warning} onChange={handleChange} /> }
        label="Warning"
      />
      <FormControlLabel
        control={ <Switch name="error" color="error" checked={switchState.error} onChange={handleChange} />}
        label="Error"
      />
      <FormControlLabel
        control={ <Switch name="info" color="info" checked={switchState.info} onChange={handleChange} />}
        label="Info"
      />
      <FormControlLabel
        control={ <Switch name="default" color="default" checked={switchState.default} onChange={handleChange} />}
        label="Default"
      />
    </Box>
  );
};
