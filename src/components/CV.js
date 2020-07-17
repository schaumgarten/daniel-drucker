import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import background from '../images/1363469042 copia.jpg'
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
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
      height: '75vh',
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'flex-start',
      position: 'relative',
    },
    name: {
        backgroundColor: 'black',
        color: 'white',
        padding: '10px',
        marginTop: '64px',
        fontFamily: 'Jost',
        textAlign: 'center'
    },
  }));

const CV = () => {
    const classes = useStyles();    
    return (
        <div>
            <Typography variant="h4" className={classes.name}>
            Curriculum Vitae
            </Typography>
        <div className={classes.title}>              
        <iframe src="https://www.scribd.com/embeds/427041423/content?access_key=key-CqFan3CWDYZsWkYtagey&amp;jsapi=true&amp;xdm_e=https://www.danieldrucker.org&amp;xdm_c=default0&amp;xdm_p=1" id="" width="100%" height="500" frameborder="0"></iframe>
    </div>
    {/* </div> */}
    <Footer/>
    </div>
        
    )
}

export default CV;