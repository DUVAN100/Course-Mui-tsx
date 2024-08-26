import  { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

export const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction='row'>
        <LoadingButton variant='outlined'>Submit</LoadingButton>
        <LoadingButton loading variant='outlined' >loading</LoadingButton>
        <LoadingButton loadingIndicator='loading...' variant='outlined' >Fecth data</LoadingButton>
        <LoadingButton loading loadingIndicator='loading...' variant='outlined' >Fecth data</LoadingButton>
        <LoadingButton variant='outlined' loadingPosition='start' startIcon={<SaveAltIcon/>}>Save</LoadingButton>
        <LoadingButton loading variant='outlined' loadingPosition='start' startIcon={<SaveAltIcon/>}>Save</LoadingButton>
    </Stack>
  )
}
