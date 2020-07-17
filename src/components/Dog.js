import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import background from '../images/ashley-picture-2.jpg'
import Link from '@material-ui/core/Link';
import Footer from './Footer'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: 'Jost',
        color: 'black',
        '& > * + *': {
            marginLeft: theme.spacing(2),
            fontFamily: 'Jost',
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontFamily: 'Jost',
        //   color: 'white',
        height: '80vh',
        width: '50%',
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        // backgroundImage: `url(${background})`,
        // backgroundPosition: 'center',
        position: 'relative',
        //   marginTop: '32px',
    },
    name: {
        backgroundColor: 'black',
        color: 'white',
        padding: '10px',
        marginTop: '64px',
        fontFamily: 'Jost',
        textAlign: 'center'
        
        
    },
    container: {
        display: 'flex',
        // flexWrap: 'wrap',
        justifyContent: 'center'
    },
    card: {
        width: '40%',
        height: 'auto',
        marginBottom: '10%',
    },
    paragraph: {
        marginTop: '50px',
        marginLeft: '15%',
        width: '70%',
        padding: '25px',
        backgroundColor: 'rgba(255,255,255,0.6)',
        maxHeight: '25%',
        maxWidth: '400px',
        positon: 'absolute',
        fontSize: '16px',
        textAlign: 'center'
        
        
    },
    image: {
        marginTop: '50px',
        // border: '1px solid',
        padding: '25px',
        boxShadow: '5px 10px #888888',
    },
    icon: {
        padding: '20px',
        color: 'black'
    }
    
}));

const Dog = () => {
    const classes = useStyles();    
    return (
        <div>
        <Typography variant="h4" className={classes.name}>
        Dog
        </Typography>
        <div className={classes.container}>
        <div>
        <img
        src={background}
        className={classes.image}
        alt='corgi dog named Ashley'
        />
        <h3 style={{"textAlign":"center"}}>Ashley</h3>
        </div>
        </div>
        <Footer/>
        </div>
        
        )
    }
    
    export default Dog;