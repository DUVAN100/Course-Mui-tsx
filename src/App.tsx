import React from 'react';
import './App.css';
// import { MuiThypografy } from './components/MuiThypografy';
// import { MuiButtons } from './components/MuiButtons';
// import { MuiTextFiled } from './components/MuiTextFiled';
// import { MuiSelect } from './components/MuiSelect';
// import { MiuRadioButton } from './components/MiuRadioButton';
// import { MuiCheckBox } from './components/MuiCheckBox';
// import { MuiSwitch } from './components/MuiSwitch';
// import { MuiRating } from './components/MuiRating';
// import { MuiAutoComplete } from './components/MuiAutoComplete';
// import { MuiLayout } from './components/MuiLayout';
// import { MuiCard } from './components/MuiCard';
// import { MuiAcordion } from './components/MuiAcordion';
// import { MuiImageList } from './components/MuiImageList';
// import { MuiNadvar } from './components/MuiNadvar';
// import { MuiLink } from './components/MuiLink';
// import { MuiBreadCrumbs }  from './components/MuiBreadCrumbs'; 
// import { MuiDrawer } from './components/MuiDrawer';
// import { MuiSpeedDial } from './components/MuiSpeedDial';
// import { MuiBottonNavigation } from './components/MuiBottonNavigation';
// import { MuiAvatar } from './components/MuiAvatar';
// import { MuiBadge } from './components/MuiBadge';
// import { MuiList } from './components/MuiList';
// import { MuiChip } from './components/MuiChip';
// import { MuiToolTip } from './components/MuiToolTip';
// import { MuiTable } from './components/MuiTable';
// import { MuiAlert } from './components/MuiAlert';
// import { MuiSnackBar } from './components/MuiSnackBar';
// import { MuiDialog } from './components/MuiDialog';
// import { MuiProgress } from './components/MuiProgress';
// import { MuiSkeleton } from './components/MuiSkeleton';
// import { MuiLoadingButton } from './components/MuiLoadingButton';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { MuiPicker } from './components/MuiPicker';


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    
      <div className="App">
      
        {/* <MuiThypografy/>
        <hr/> */}
        {/* <MuiButtons/> */}
        {/* <MuiTextFiled/> */}
        {/* <MuiSelect/> */}
        {/* <MiuRadioButton /> */}
        {/* <MuiCheckBox/> */}
        {/* <MuiSwitch/> */}
        {/* <MuiRating/> */}
        {/* <MuiAutoComplete/> */}
        {/* <MuiLayout /> */}
        {/* <MuiCard /> */}
        {/* <MuiAcordion/> */}
        {/* <MuiImageList /> */}
        {/* <MuiNadvar/>
        <MuiLink/> */}
        {/* <MuiBreadCrumbs/> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial/> */}
        {/* <MuiBottonNavigation /> */}
        {/* <MuiAvatar/> */}
        {/* <MuiBadge/> */}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiToolTip/> */}
        {/* <MuiTable/> */}
        {/* <MuiAlert/> */}
        {/* <MuiSnackBar/> */}
        {/* <MuiDialog/> */}
        {/* <MuiProgress/> */}
        {/* <MuiSkeleton/> */}
        {/* <MuiLoadingButton/> */}
        <MuiPicker/>
      </div>
    </LocalizationProvider>
  );
}

export default App;
