import { Stack, CircularProgress, LinearProgress } from '@mui/material'
import React from 'react'

export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
        <CircularProgress />
        <CircularProgress color='secondary' />
        <CircularProgress size={80} />
        <CircularProgress variant='determinate' value={50} />
        <CircularProgress variant='indeterminate' />
        <CircularProgress color='primary' thickness={10} />

        <LinearProgress />
        <LinearProgress color='secondary' />
        <LinearProgress variant='indeterminate' />
        <LinearProgress variant='determinate' value={50} />
        <LinearProgress color='primary' />
    </Stack>
  )
}
