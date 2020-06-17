import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './styles';

const Header = () => {
    const classes = useStyles();
    return(
        <header className={classes.root}>
            <Avatar alt="Remy Sharp" src="https://avatars2.githubusercontent.com/u/7648741?s=460&u=f019ed9e57792d11b69b7dc689f9fdda1998ad2a&v=4" />
        </header>
    )
}

export default Header;