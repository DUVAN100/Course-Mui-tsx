import { Box, Stack, Divider, Grid, Paper } from '@mui/material';
import React from 'react';

export const MuiLayout = () => {
  return (
    <Paper sx={{padding:'32px'}} elevation={10}>
        <Stack sx={{border:'1px solid '}} direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem/>}>
            <Box sx={{
                backgroundColor:'primary.main', 
                color:'white', 
                height:'100px', 
                width:'100px', 
                padding:'20px',
                '&:hover':{ 
                    backgroundColor:'white',
                    color:'black'
                }
            }}>
                CodeVolituion
            </Box>
            <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2.5}>
                CodeVolituion
            </Box>
        </Stack>
        <Grid container my={5} rowSpacing={5} columnSpacing={3}>
            <Grid item xs={12} md={5} lg={1}>
                <Box bgcolor='aqua' p={2}> item 1</Box>
            </Grid>
            <Grid item xs={12} md={4} lg={2}>
                <Box bgcolor='aqua' p={2}> item 2</Box>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
                <Box bgcolor='aqua' p={2}> item 3</Box>
            </Grid>
            <Grid item xs={12} md={2} lg={4}>
                <Box bgcolor='aqua' p={2}>item 3</Box>
            </Grid>
        </Grid>
    </Paper>
  )
}
