import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: 'Jost',
        fontSize: '14px',
        color: 'black',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        display: 'flex',
        alignItems: 'flex-end',
        backgroundColor: 'white',
    },
    footer: {
        position: 'fixed',
        textAlign:"center", 
        color:"grey", 
        paddingBottom:"20px",
        width: "100%"
    },
    link: {
        color: "grey"
    }
}));



const Footer = () => {
    const classes = useStyles();    
    return (
        <div className={classes.footer}>
        Daniel Drucker, 2020
        <br/>
        <a className={classes.link} href="mailto:drucker@texas.edu">drucker@utexas.edu</a>
        
        </div>
        )
    };
    
    export default Footer;