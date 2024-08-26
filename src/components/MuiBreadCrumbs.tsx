import React from 'react'
import { Box , Breadcrumbs, Link, Typography} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export const MuiBreadCrumbs = () => {
  return (
    <Box m={2}>
        {/* <Breadcrumbs aria-label='breadcrumb' separator='|'> */}
        <Breadcrumbs aria-label='breadcrumb' separator={<NavigateNextIcon fontSize='small'/>} maxItems={3} itemsBeforeCollapse={2}>
            <Link underline='hover' href='#'>Home</Link>
            <Link underline='hover' href='#'>Catalog</Link>
            <Link underline='hover' href='#'>Accesories</Link>
            <Link underline='hover' href='#'>More</Link>
            <Typography color='textPrimary'>Shoes</Typography>
        </Breadcrumbs>
    </Box>
  )
}
