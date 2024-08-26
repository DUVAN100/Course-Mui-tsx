import React from 'react'
import { Box, Card, CardActions, CardContent, Typography, Button, CardMedia } from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia component='img' height='194' image='../../public/logo192.png'/>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>React</Typography>
                <Typography variant='body2' color='text.secondary'>React is an open source JavaScript library designed for creating user interfaces with the goal of facilitating the development of single-page applications. It is maintained by Facebook and the free software community. There are over a thousand free developers in the project.</Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>attach</Button>
                <Button size='small'>learn more</Button>
            </CardActions>
        </Card>
    </Box>
  )
}
