import { Avatar, Link as MuiLink, Stack } from '@mui/material';
import PDFIcon from '@mui/icons-material/PictureAsPdfOutlined';


export const ResumeView = () => {

    return (
        <Stack className='animate' direction='row' justifyContent='center'>
            <MuiLink href='./stevenduval_resume.pdf' rel='noopener' target='_blank' title='Resume' sx={{ textDecoration: 'none' }}>
                <Avatar sx={{ backgroundColor: '#FFFFFF', width: '120px', borderRadius: '2px', fontSize: '13px', fontWeight: 'bold' }} alt='Resume'>
                    <PDFIcon sx={{ width: 25, height: 25, marginRight: '4px' }} /> View R&eacute;sum&eacute;
                </Avatar>
            </MuiLink>
        </Stack>
    );

}