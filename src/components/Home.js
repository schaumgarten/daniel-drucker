import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import background from '../images/1363469042 copia.jpg'
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Link from '@material-ui/core/Link';

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
        // justifyContent: 'center'
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
      width: '50%',
      marginTop: '100px',
      // border: '1px solid',
      padding: '25px',
      boxShadow: '5px 10px #888888',
    },
    icon: {
      padding: '20px',
      color: 'black'
    }

  }));

const Home = () => {
    const classes = useStyles();    
    return (
        <div>
            <Typography variant="h4" className={classes.name}>
            Daniel Drucker
            </Typography>
        <div className={classes.container}>
        <div className={classes.title}>
               
                <Typography variant="body" component="p" className={classes.paragraph}>
                  Hi! I’m an Assistant Professor of Philosophy at the University of Texas at Austin. I think and write about what and how we <b><u>can</u></b> think and feel, what and how we <b><u>ought to</u></b> think and feel, and what and how we do and ought to <b><u>talk about</u></b> how we think and feel. One of my main aims is to put Socrates and Plato in modern dress; check out the results for yourself!
                  <br/>
                  <Link href="https://twitter.com/DruckerDaniel" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon className={classes.icon}/>
                  </Link>
                  <Link href="mailto:drucker@texas.edu">
                    <MailOutlineIcon className={classes.icon}/>
                  </Link>
                </Typography>

    </div>
    <div>
      <img
        src={background}
        className={classes.image}
        alt='philosophy grafitti'
      />
    </div>
    </div>
    </div>
        
    )
}

export default Home;