import React from 'react'
import { Stack, Avatar, AvatarGroup } from '@mui/material'
export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={1}>
            <AvatarGroup max={5}>
                <Avatar  sx={{bgcolor:'success.light', height:48, width:48}}>DV</Avatar>
            </AvatarGroup>
        </Stack>
        <Stack direction='row' spacing={1}>
            <AvatarGroup max={5}>
                {Array.from({ length: 6}, (_, i) => (
                    <Avatar key={i + 1} alt={`Remy Sharp ${i + 1}`} src={`https://material-ui.com/static/images/avatar/${i + 1}.jpg`} />
                ))}
                <Avatar sx={{bgcolor:'success.light'}}>DV</Avatar>
            </AvatarGroup>
        </Stack>
        <Stack direction='row' spacing={1}>
            <AvatarGroup max={5}>
                <Avatar variant='square' sx={{bgcolor:'success.light', height:48, width:48}}>DV</Avatar>
            </AvatarGroup>
        </Stack>
    </Stack>
  )
}
