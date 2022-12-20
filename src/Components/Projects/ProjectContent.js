import { CardContent, Typography } from '@mui/material';

export const ProjectContent = (props) => {

    const { data } = props;

    return (
        <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
                {data.title}
            </Typography>
            <Typography variant='body2'>
                {data.description}
            </Typography>
            <Typography variant='caption'>
                {`Technologies: ${data.tech}`}
            </Typography>
        </CardContent>
    );
}