import { AccordionDetails, Typography } from '@mui/material';

export const ResumeDetails = (props) => {

    const { data } = props;

    return (
        <AccordionDetails sx={{ textAlign: 'center' }}>
            <Typography component='p' sx={{ pb: 2 }}>
                <img src={data.logoSrc} alt={data.company} style={{ width: '120px' }} />
            </Typography>
            {data.tasks.map((task, index) => (
                <Typography component='p' key={index} variant='body2' sx={{ pb: 1 }}>
                    {task}
                </Typography>
            ))}
            <Typography variant='caption'>
                Skills: {data.skills}
            </Typography>
        </AccordionDetails>
    );
}