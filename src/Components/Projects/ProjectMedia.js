import { CardMedia } from '@mui/material';

export const ProjectMedia = (props) => {

    const { data } = props;

    return (
        <CardMedia component='img' image={data.mockupImg} alt={`${data.title} Mockup`} />
    );
}