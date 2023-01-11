import { useState } from 'react';
import { ResumeView } from './ResumeView';
import { ResumeSummary } from './ResumeSummary';
import { ResumeDetails } from './ResumeDetails';
import { Accordion, Container } from '@mui/material'


export const Resume = () => {

    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => setExpanded(isExpanded ? panel : false);

    const data = [
        { logoSrc: './images/persado.png', company: 'Persado', title: 'Senior Front-End Developer', dates: '2/2022 - 01/2023', tasks: ['Introduced efficiencies via process improvements and creation of plugins and scripts to automate repetitive tasks.', 'Build and deliver campaigns in Web and Email channels. This involves using JavaScript, Sketch and Photoshop.', 'Adhere to rigorous quality assurance processes to ensure flawless delivery and on time execution.'], skills: 'HTML, CSS, JavaScript, Photoshop, Sketch, Python, Excel' },
        { logoSrc: './images/dmd.png', company: 'DMD', title: 'Senior Email Deployment Specialist', dates: '1/2019 - 2/2022', tasks: ['Introduced improved processes by creation of custom scripts and optimizing platform utilization.', 'Lead the creation of custom solutions for time sensitive workarounds, automated email trigger and dynamic content campaigns.', 'Maintain/strategize deliverability across multiple IP’s and platforms.'], skills: 'HTML, CSS, SQL, JavaScript, Excel, Acoustic, Responsys' },
        { logoSrc: './images/dmd.png', company: 'DMD', title: 'Email Deployment Specialist', dates: '6/2015 - 1/2019', tasks: ['Introduced custom vba scripts in excel to aid in reporting and ease errors in daily repetitive tasks.', 'Lead the discovery of building custom programs within Responsys to automate complex sends.', 'Create and maintain documentation to support team on updated processes and platform configuration requirements.'], skills: 'HTML, CSS, SQL, JavaScript, Excel, Acoustic, Responsys' },
        { logoSrc: './images/sears.png', company: 'Sears', title: 'Email Campaign Specialist', dates: '1/2015 - 6/2015', tasks: ['Assisted in the training of new team members.', 'Built and revised dynamic content campaigns for multiple brands.', 'Adhered to multiple quality assurance processes to ensure proper execution.'], skills: 'HTML, CSS, SQL, Responsys' },
        { logoSrc: './images/sears.png', company: 'Sears', title: 'Email Quality Assurance Analyst', dates: '7/2014 - 1/2015', tasks: ['Communicated across multiple teams to provide feedback on promotional and transactional campaigns.', 'Ensured email rendering was consistent across multiple devices, browsers and email clients.', 'Adhered to multiple quality assurance processes to maintain brand guidelines and consistent user experience.'], skills: 'HTML, CSS, Litmus' }
    ];

    return (
        <Container id='resume' maxWidth='lg'>
            <ResumeView />
            {data.map((item, index) => (
                <Accordion className='animate' key={index} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                    <ResumeSummary data={item} index={index} />
                    <ResumeDetails data={item} />
                </Accordion>
            ))}
        </Container>
    );

}