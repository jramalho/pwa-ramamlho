import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import BehanceIcon from '../../assets/svgIcons/BehanceIcon';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return(
        <div>
            <a><GitHubIcon/></a>
            <a><LinkedInIcon/></a>
            <a><EmailIcon/></a>
            <a><BehanceIcon/></a>
        </div>
    );
}

export default Footer;