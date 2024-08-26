import React, { useState } from 'react';
import { Box, Accordion, AccordionSummary ,AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const MuiAcordion = () => {
    const[ expanded, setExpanded ] = useState<string | false>(false);
    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded? panel : false);
    };
  return (
    <>
        <Box width='250px'>
            <Accordion expanded={expanded==='panel1'} onChange={(event, isExpanded)=> handleChange(isExpanded, 'panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography variant="h6">Heading 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded==='panel2'} onChange={(event, isExpanded)=> handleChange(isExpanded, 'panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography variant="h6">Heading 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded==='panel3'} onChange={(event, isExpanded)=> handleChange(isExpanded, 'panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                    <Typography variant="h6">Heading 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
        
    </>
  )
}
