import React from 'react';
import { AppBar } from "@material-ui/core";
import { Button,Toolbar } from "@material-ui/core";
//import {Typography } from "@material-ui/core"
import SchoolSharpIcon from '@material-ui/icons/SchoolSharp';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(()=>({

    buttonstyles:{
        color:"rgb(255,255,255)",
        borderRadius: "30px",
        backgroundColor:"rgb(247, 19, 2)",
        width:"100px",
        display:"flex",
        alignContent:"spaceAround",
        justifyContent:"spaceAround"
        
    },
    appbarstyles:{
        backgroundColor:"rgb(209, 57, 46)",
        width:1200,
        marginLeft:150,
        borderRadius:30
    }
    
}));

const Header1 =  ()=> {
    const classes = useStyles();
        return ( 
            <div className={classes.main}>
            <AppBar position="static" className={classes.appbarstyles} >
                <Toolbar>
                    <SchoolSharpIcon className={classes.iconstyles}></SchoolSharpIcon>
    <div style={{ width: '100%' }}>
      <Box display="flex" flexDirection="row" justifyContent="space-around" p={1} m={1} bgcolor="rgb(209, 57, 46)" >
        <Box p={1} >
          Home
        </Box>
        <Box p={1} >
          Overview
        </Box>
        <Box p={1} >
          Faculty
        </Box>
        <Box p={1} >
          Important Documents
        </Box>
        <Box p={1} bgcolor="rgb(209, 57, 46)">
          Events
        </Box>
      </Box>
    </div>
    <Button color="inherit" className={classes.buttonstyles}>Login</Button>
                </Toolbar>
            </AppBar>
            </div>
         );
    } 
export default Header1;
