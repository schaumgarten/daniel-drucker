import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Toolbar, AppBar} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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
  }));
  
  

const Nav = () => {
    const classes = useStyles();    
    return (
        <div>
            <AppBar position='fixed' className={classes.root}>
                <Toolbar>
                    <Typography className={classes.root}>
                        <Link href='./' underline='none' color='inherit'>
                            Home
                        </Link>
                        <Link href='./cv' underline='none' color='inherit'>
                            CV
                        </Link>
                        <Link href='./papers' underline='none' color='inherit'>
                            Research
                        </Link>
                        <Link href='./teaching' underline='none' color='inherit'>
                            Teaching
                        </Link>
                        <Link href='./dog' underline='none' color='inherit'>
                            Dog
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Nav;