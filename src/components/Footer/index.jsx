import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import BehanceIcon from '../../assets/svgIcons/BehanceIcon';
import GitHubIcon from '@material-ui/icons/GitHub';

import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <a 
                href="https://github.com/jramalho" 
                className={classes.links}
            >
                    <GitHubIcon/>
            </a>
            <a 
                href="https://www.linkedin.com/in/jonathanramalho/"
                className={classes.links}
            >
                <LinkedInIcon/>
            </a>
            <a 
                href="mailto:jonathan.oliveira.ramalho@gmail.com"
                className={classes.links}    
            >
                <EmailIcon/>
            </a>
            <a 
                href="https://www.behance.net/jonathanramalho"
                className={classes.links}
            >
                <BehanceIcon/>
            </a>
        </div>
    );
}

export default Footer;