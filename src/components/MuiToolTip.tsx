import React ,{ useRef } from 'react'
import { Tooltip, IconButton, Stack, Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Instance } from '@popperjs/core';

export const MuiToolTip = () => {
    const positionRef = useRef<{ x: number; y: number }>({x: 0,y: 0,});
    const popperRef = useRef<Instance>(null);
    const areaRef = useRef<HTMLDivElement>(null);
    
    const handleMouseMove = (event: React.MouseEvent) => {
        positionRef.current = { x: event.clientX, y: event.clientY };
        if (popperRef.current != null) 
            popperRef.current.update();
    };
  return (
    <Stack direction='row' spacing={2}>
        <Tooltip title='Delete' placement='top' arrow enterDelay={500} leaveDelay={200}>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
        <Tooltip title="Title" followCursor>
            <Box sx={{ bgcolor: 'aqua', color: 'background.paper', p: 2, width:100}}> Disabled Action </Box>
        </Tooltip>
        <Tooltip title="Add" placement="top" arrow
            PopperProps={{popperRef, anchorEl: {getBoundingClientRect: () => new DOMRect(positionRef.current.x, areaRef.current!.getBoundingClientRect().y, 0, 0)}}}>
            <Box ref={areaRef} onMouseMove={handleMouseMove} sx={{bgcolor: 'primary.main',color: 'primary.contrastText',p: 2,}}>
                Hover
            </Box>
        </Tooltip>
    </Stack>
  )
}
