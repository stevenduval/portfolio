import { AccordionSummary, Typography } from '@mui/material';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';


export const ResumeSummary = (props) => {

    const { data, index } = props;

    return (
        <AccordionSummary aria-controls={`panel${index + 1}d-content`} id={`panel${index + 1}d-header`}>
            <Typography component='p' sx={{ display: 'flex', alignItems: 'center' }}>
                <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', mr: 1 }} />
                {data.title}
            </Typography>
            <Typography component='p'>
                {data.dates}
            </Typography>
        </AccordionSummary>
    );
}