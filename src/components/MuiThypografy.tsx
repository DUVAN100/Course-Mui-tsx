import React from 'react';
import { Typography } from '@mui/material';


export const MuiThypografy = () => {
  return (
    <>
    <Typography variant='h1'>H one heading</Typography>
    <Typography variant='h2'>H two heading</Typography>
    <Typography variant='h3'>H three heading</Typography>
    <Typography variant='h4' component='h1'>
        H four heading
    </Typography>
    <Typography variant='h5'>H five heading</Typography>
    <Typography variant='h6'>H six heading</Typography>

    <Typography variant='subtitle1'>subtitle one</Typography>
    <Typography variant='subtitle2'>subtitle two</Typography>


    <Typography variant='body1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corporis, neque magnam, praesentium excepturi minus, tenetur unde rem sequi reprehenderit vitae cum? Sunt aspernatur reiciendis dicta. Vero, mollitia alias.
    </Typography>

    <Typography variant='body2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ad magni aspernatur? Culpa quod nesciunt odio. Temporibus modi error eaque nisi officiis beatae nesciunt doloremque eius molestiae delectus, animi laborum.
    </Typography>

    </>
  )
}
