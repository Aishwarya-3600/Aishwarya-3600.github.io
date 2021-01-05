import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Faculty from './components/Faculty1';
//import Alumni from './components/Alumni';
import Image from './components/AIT.jpg.png';
import Grid from '@material-ui/core/Grid';
import Footer from './components/Footer';
import Header1 from './components/Header1';
/*import Programme from './components/Programmes';*/
/*const useStyles = makeStyles((theme) => ({
  
  
}));*/



function App() {
  //const classes = useStyles();
  return (
    <div>
    <Header />
    <Grid container direction="column" >
    <Grid item><img src={Image} width="100%" height="300" alt="college" /></Grid>
    <Header1 />
    </Grid>
    
    <Faculty />
    <Footer />
    </div>


  )
}
export default App;

                 