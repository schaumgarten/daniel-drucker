import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, List, ListItem, ListItemText, Link} from '@material-ui/core';
import Papers from '../services/papers'
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
    item: {
      '&:hover': {
        backgroundColor: 'grey',
        color: 'white !important ',
      },
    },
    list: {
      width: '30%',
    },
    centeredText: {
      textAlign: "center"
    }

  }));

const Research = () => {
  const [papers, setPapers] = useState([]);
  const [selected, setSelected] = useState();
  const fetchPapers = () => {
    const services = new Papers();
    services.getAll();
    setPapers(services.all);
  }
  useEffect(() => {
    fetchPapers();
  }, []);

    const classes = useStyles();    
    return (
        <div>
            <Typography variant="h4" className={classes.name}>
            Research
            </Typography>
          <div className={classes.container}>
          <List className={classes.list}>
          <ListItem>
                  <ListItemText><b><u>Published papers</u></b></ListItemText>
              </ListItem>
            {papers.map((paper) => (
              <ListItem key={paper.id} className={classes.item}  onClick={() => { setSelected(paper); }}>
                <ListItemText primary={paper.title} secondary={paper.journal.concat(', ').concat(paper.year)}/>
              </ListItem>
            ))}
          </List>
          {selected ? <Typography variant="body" component="p" className={classes.paragraph}>
                  <b>Title: </b>{selected.title} <br/>  
                  {selected.coauthor ? <div><b> Coauthor: </b>{selected.coauthor}</div> : <div/>}
                  <b>Journal: </b>{selected.journal}  
                  <b>   Year: </b>{selected.year} <br/>
                  <b>Abstract: </b>{selected.abstract} <br/>
                  <br/>
                  <Link href={selected.url} target="_blank" rel="noopener noreferrer" className={classes.downloadLink}>
                    <GetAppIcon />
                    <b>Download</b>
                  </Link>
                </Typography>
                :
                <p className={classes.paragraph}> Select a paper</p>
          }
          
          </div>
          <Footer/>
        </div>
        
    )
}

export default Research;