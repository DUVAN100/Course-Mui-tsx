import React from 'react'
import { Stack, Link, Typography } from '@mui/material'
export const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>
        <Link href='#' variant='body2'>link</Link>
        <Link href='#' color='secondary' underline='hover'>Secondary</Link>
        <Link href='#' color='secondary' underline='none'>Secondary</Link>
        <Typography variant='h6'>
            <Link href='#'>Typography</Link>
        </Typography>
    </Stack>
  )
}
