import React from 'react'
import  { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import CopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const MuiSpeedDial = () => {
  return (
    <>
        <SpeedDial ariaLabel='NavigationSpeedDial' sx={{position:'absolute', bottom:16, right:16}} icon={<SpeedDialIcon/>}>
            <SpeedDialAction icon={<SpeedDialIcon />} tooltipTitle="Add" tooltipOpen/>
            <SpeedDialAction icon={<DeleteOutlineIcon />} tooltipTitle="Delete" tooltipOpen/>
            <SpeedDialAction icon={<EditIcon />} tooltipTitle="Edit" tooltipOpen/>
            <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" tooltipOpen/>
            <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" tooltipOpen/>
            <SpeedDialAction icon={<CopyIcon />} tooltipTitle="Copy" tooltipOpen/>
            <SpeedDialAction icon={<DataSaverOnIcon />} tooltipTitle="Save" tooltipOpen/>
        </SpeedDial>
    </>
  )
}
