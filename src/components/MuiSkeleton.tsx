import React, { useState, useEffect } from 'react';
import { Stack, Skeleton, Box, Avatar, Typography } from '@mui/material';

export const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 2000)
    }, [])
  return (
    <>
        {/* <Stack spacing={1} width='250px'>
            <Skeleton variant='rectangular' height={150} width='100%' />
            <Skeleton variant='text' />
            <Skeleton variant='circular' width={60} height={60} />
            <Skeleton variant='rectangular' height={80} width='100%' />
            <Skeleton variant='circular' width={40} height={40} />
        </Stack> */}
        <Box sx={{width:'250px'}}>
            {loading?(
                <Skeleton variant='circular' width={150} height={150} animation='wave'/>
            ):(
                <img src='hhtps://source.unsplash.com/ramdom/256x144' alt='skeleton' width={256} height={144}/>
            )}
            <Stack direction='row' spacing={1} sx={{width:'100%', marginTop:'12px'}}>
                {loading ? (
                     <Skeleton variant='circular' width={40} height={40} animation='wave'/>
                    ):(
                        <Avatar src='hhtps://source.unsplash.com/random/64x64' alt='skeleton' />
                    )
                }
                <Stack sx={{width:'80%'}}>
                    {loading?(
                        <>
                            <Typography variant='body1'>
                                <Skeleton variant='text' width='100%' animation='wave'/>
                            </Typography>
                            <Typography variant='body2'>
                                <Skeleton variant='text' width='100%' animation='wave'/>
                            </Typography>
                        </>
                    ):(
                        <>
                            <Typography variant='body1'>React Mui Tutorial</Typography>
                            <Typography variant='body2'>3 monts</Typography>
                        </>
                    )}
                </Stack>
            </Stack>

        </Box>
    </>
  )
}
