import React from 'react'
import { Stack, Badge, Button } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction='row'>
        <Badge badgeContent={4} color="primary">
            <EmailIcon/>
        </Badge>
        <Badge badgeContent={2} color="secondary">
            <Button variant="contained" color="secondary">Secondary</Button>
        </Badge>
        <Badge badgeContent={0} color="error" showZero>
            <Button variant="contained" color="error">Error</Button>
        </Badge>
        <Badge badgeContent={99} color="warning">
            <Button variant="contained" color="warning">Warning</Button>
        </Badge>
        <Badge badgeContent={1000} color="success" max={999}>
            <Button variant="contained" color="success">Success</Button>
        </Badge>

        <Badge badgeContent={1} color="primary" invisible={false} variant='dot'>
            <Button variant="contained" color="primary">Primary</Button>
        </Badge>
    </Stack>
  )
}
