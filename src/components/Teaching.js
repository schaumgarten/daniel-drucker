import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, List, ListItem, ListItemText, Link} from '@material-ui/core';
import Syllabi from '../services/syllabi'
import GetAppIcon from '@material-ui/icons/GetApp';
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
        height: '77vh'
    },

    paragraph: {
        marginLeft: '8%',
        width: '70%',
        padding: '25px',
        maxHeight: '25%',
        maxWidth: '400px',
        positon: 'absolute',
        fontSize: '16px'

     },
     downloadLink: {
        paddingLeft: '30%',
        color: 'darkRed'
      },
    list: {
        width: '30%',
    },
    item: {
      '&:hover': {
        backgroundColor: 'grey',
        color: 'white !important ',
      },
    }

  }));

const Teaching = () => {
  const [current, setCurrent] = useState([]);
  const [past, setPast] = useState([]);
  const [selected, setSelected] = useState();
  const fetchSyllabi = () => {
    const services = new Syllabi();
    services.getCurrent();
    services.getPast();
    setCurrent(services.current);
    setPast(services.past);
  }
  useEffect(() => {
    fetchSyllabi();
  }, []);

    const classes = useStyles();    
    return (
        <div>
            <Typography variant="h4" className={classes.name}>
            Teaching
            </Typography>
          <div className={classes.container}>
          <List className={classes.list}>
              <ListItem>
                  <ListItemText><b><u>Current courses</u></b></ListItemText>
              </ListItem>
            {current.map((syllabus) => (
              <ListItem key={syllabus.id} className={classes.item}  onClick={() => { setSelected(syllabus); }}>
                <ListItemText primary={syllabus.title} secondary={syllabus.semester}/>
              </ListItem>
            ))}
              <ListItem>
                  <ListItemText><b><u>Past courses</u></b></ListItemText>
              </ListItem>
            {past.map((syllabus) => (
              <ListItem key={syllabus.id} className={classes.item}  onClick={() => { setSelected(syllabus); }}>
                <ListItemText primary={syllabus.title} secondary={syllabus.semester}/>
              </ListItem>
            ))}
          </List>
          {selected ? <Typography variant="body" component="p" className={classes.paragraph}>
                  <b>Title: </b>{selected.title} <br/>  
                  <b>   Course: </b>{selected.semester} <br/>
                  <b>Description: </b>{selected.description} <br/>
                  <br/>
                  <Link href={selected.url} target="_blank" rel="noopener noreferrer" className={classes.downloadLink}>
                    <GetAppIcon />
                    <b>Download</b>
                  </Link>
                </Typography>
                :
                <p className={classes.paragraph}> Select a course</p>
          }
          
          </div>
          <Footer/>
        </div>
        
    )
}

export default Teaching;