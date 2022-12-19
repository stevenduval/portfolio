import React from "react";

import { Accordion, AccordionSummary, AccordionDetails, Container, Typography } from "@mui/material"

import { Avatar, Link, Stack } from "@mui/material";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import Persado from "./static/images/persado.png";
import DMD from "./static/images/dmd.png";
import Sears from "./static/images/sears.png";
import ResumePDF from "./static/stevenduval_resume.pdf"

import './static/styles/stylesheet.css';

import PDFIcon from '@mui/icons-material/PictureAsPdfOutlined';

export const Resume = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => setExpanded(isExpanded ? panel : false);

    return (
        <Container className="animation" sx={{ pl: { md: "137px" }, display: "flex", justifyContent: "center", flexDirection: "column", mt: 0 }} maxWidth="lg">
            <Stack direction="row" justifyContent="center">
            <Link href={ResumePDF} rel="noopener" target="_blank" title="Resume" sx={{textDecoration: 'none'}}>
                <Avatar sx={{ backgroundColor: "#FFFFFF", width: '120px', borderRadius: '2px', fontSize: '13px', fontWeight: 'bold' }} alt="Resume">
                    <PDFIcon sx={{ width: 25, height: 25, marginRight: '4px'}} /> View Resum&eacute;
                </Avatar>
            </Link>
        </Stack>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                        <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', mr: 1 }} />
                        Senior Front-End Developer
                    </Typography>
                    <Typography>2/2022 - Present</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: "center" }}>
                    <Typography sx={{ pb: 2 }}>
                        <img src={Persado} alt="Persado" style={{ width: "120px" }} />
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 1 }}>
                        Introduced efficiencies via process improvements and creation of plugins and scripts to automate repetitive tasks.
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 1 }}>
                        Build and deliver campaigns in Web and Email channels. This involves using JavaScript, Sketch and Photoshop.
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 1 }}>
                        Adhere to rigorous quality assurance processes to ensure flawless delivery and on time execution.
                    </Typography>
                    <Typography variant="caption">
                        Skills: HTML, CSS, JavaScript, Photoshop, Sketch, Python, Excel
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                        <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', mr: 1 }} />
                        Senior Email Deployment Specialist
                    </Typography>
                    <Typography>1/2019 - 2/2022</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: "center" }}>
                    <Typography sx={{ pb: 2 }}>
                        <img src={DMD} alt="DMD" style={{ width: "120px" }} />
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 1 }}>
                        Introduced improved processes by creation of custom scripts and optimizing platform utilization.
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 1 }}>
                        Lead the creation of custom solutions for time sensitive workarounds, automated email trigger and dynamic content campaigns.
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 1 }}>
                        Manage email deliverability, reporting and platform support for multiple ip's and platforms.
                    </Typography>
                    <Typography variant="caption">
                        Skills: HTML, CSS, SQL, JavaScript, Excel, Acoustic, Responsys
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                        <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', mr: 1 }} />
                        Email Deployment Specialist
                    </Typography>
                    <Typography>6/2015 - 1/2019</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: "center" }}>
                    <Typography sx={{ pb: 2 }}>
                        <img src={DMD} alt="DMD" style={{ width: "120px" }} />
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 1 }}>
                        Introduced custom vba scripts in excel to aid in reporting and ease errors in daily repetitive tasks.
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 1 }}>
                        Lead the discovery of building custom programs within Responsys to automate complex sends.
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 1 }}>
                        Create and maintain documentation to support team on updated processes and platform configuration requirements.
                    </Typography>
                    <Typography variant="caption">
                        Skills: HTML, CSS, SQL, JavaScript, Excel, Acoustic, Responsys
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                        <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', mr: 1 }} />
                        Email Campaign Specialist
                    </Typography>
                    <Typography>1/2015 - 6/2015</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: "center" }}>
                    <Typography sx={{ pb: 2 }}>
                        <img src={Sears} alt="Sears" style={{ width: "120px" }} />
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 1 }}>
                        Assisted in the training of new team members.
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 1 }}>
                        Built and revised dynamic content campaigns for multiple brands.
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 1 }}>
                        Adhered to multiple quality assurance processes to ensure proper execution.
                    </Typography>
                    <Typography variant="caption">
                        Skills: HTML, CSS, SQL, Responsys
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                        <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', mr: 1 }} />
                        Email Quality Assurance Analyst
                    </Typography>
                    <Typography>7/2014 - 1/2015</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: "center" }}>
                    <Typography sx={{ pb: 2 }}>
                        <img src={Sears} alt="Sears" style={{ width: "120px" }} />
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 1 }}>
                        Communicated across multiple teams to provide feedback on promotional and transactional campaigns.
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 1 }}>
                        Ensured email rendering was consistent across multiple devices, browsers and email clients.
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 1 }}>
                        Adhered to multiple quality assurance processes to maintain brand guidelines and consistent user experience.
                    </Typography>
                    <Typography variant="caption">
                        Skills: HTML, CSS, Litmus
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
}