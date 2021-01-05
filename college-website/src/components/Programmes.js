
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 90
    },
    grid: {
      padding: theme.spacing(2),
      
      marginLeft:90,
      marginRight:240,
      
    },
    mainheading:{
      backgroundColor:'rgb(209,57,46)',
      color:'white',
      fontSize:18,
      marginTop:15,
      width:750,
      height:30,
      paddingLeft:15

    },
    subheading:{
        color: 'black',
        fontWeight:'bolder',
      fontSize:18

    },
    body:{
        color: 'black',
        marginLeft:30,
      fontSize:15

    },
    event:{
        backgroundColor:'rgb(209,57,46)',
        borderRadius:60,
        color:'white',
        fontSize:15,
        marginTop:15,
        fontWeight:'bold',
        marginLeft:9,
        width:240,
        height:30

    }
  }));
function Programmes() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
         <Grid container spacing={9}>
        <Grid item xs={12} className={classes.grid}>
          <p className={classes.mainheading}>Core Java Programming - CSE</p>
              <p className={classes.subheading}>Event Handling</p>
              <p className={classes.body}>Changing the state of an object is known as an event. For example, click on button, dragging mouse etc. 
              The java.awt.event package provides many event classes and Listener interfaces for event handling.</p>
              <p className={classes.subheading}>Event Handling</p>
              <p className={classes.body}>Changing the state of an object is known as an event. For example, click on button, dragging mouse etc. 
              The java.awt.event package provides many event classes and Listener interfaces for event handling.</p>
              <p className={classes.subheading}>Event Handling</p>
              <p className={classes.body}>Changing the state of an object is known as an event. For example, click on button, dragging mouse etc. 
              The java.awt.event package provides many event classes and Listener interfaces for event handling.</p>
              <button className={classes.event}>See Complete reference</button>
          
        </Grid>
        </Grid>
        <br/><br/><br/>
        <Grid container spacing={9}>
        <Grid item xs={12} className={classes.grid}>
          <p className={classes.mainheading}>Core Java Programming - CSE</p>
              <p className={classes.subheading}>Event Handling</p>
              <p className={classes.body}>Changing the state of an object is known as an event. For example, click on button, dragging mouse etc. 
              The java.awt.event package provides many event classes and Listener interfaces for event handling.</p>
              <p className={classes.subheading}>Event Handling</p>
              <p className={classes.body}>Changing the state of an object is known as an event. For example, click on button, dragging mouse etc. 
              The java.awt.event package provides many event classes and Listener interfaces for event handling.</p>
              <p className={classes.subheading}>Event Handling</p>
              <p className={classes.body}>Changing the state of an object is known as an event. For example, click on button, dragging mouse etc. 
              The java.awt.event package provides many event classes and Listener interfaces for event handling.</p>
              <button className={classes.event}>See Complete reference</button>
          
        </Grid>
        </Grid>
        

        </div>
    )
}
export default Programmes;