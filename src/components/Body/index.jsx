import React from 'react';
import useStyles from './styles';

const Body = ({}) => {
    const classes = useStyles();
    return(
        <main className={classes.root}>
            Main
        </main>
    )
}

export default Body;