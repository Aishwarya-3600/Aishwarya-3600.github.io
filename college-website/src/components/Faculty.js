
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 180,
    marginBottom:90,
    marginLeft:90,
    marginRight:90
  },
image: {
    width: 300,
    height: 270,

  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: 120,
    height: 120
  },
  
  previous:{
    
    height: 45,
    backgroundColor:'rgb(209,57,46)',
    borderRadius:50,
    color:'white',
    fontSize:15,
    fontWeight:'bold',
    "&:hover": {
    backgroundColor: 'brown'
  }
  

  },
  
  next:{
    marginLeft:1400,
    height: 30,
    width:36,
    backgroundColor:'rgb(209,57,46)',
    borderRadius:50,
    color:'white',
    fontSize:15,
    fontWeight:'bolder',
    textAlign:'center',
    "&:hover": {
    backgroundColor: 'brown'
  }
  
}
}));


function Faculty() {
    const classes = useStyles();
  return (
    
    <div className={classes.root} id = "one">
      
        <Grid container spacing={9}>
          <Grid item xs={6} sm={3}>
            <Box border={1.5} borderColor="rgb(209,57,46)" style={{ width: 300 }} >
              <Grid container spacing={2} direction="column">
                  <Grid item>
                  <Box borderBottom={1} borderColor="rgb(209,57,46)">
                    <ButtonBase className={classes.image}>
                      <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.orange} >
                        B
                       </Avatar>
                     </ButtonBase>
                  </Box>
                </Grid>
              <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" style={{ fontWeight: "bolder", fontSize: "24", textAlign: "center" }}>
                        Name
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom style={{ textAlign: "center", fontWeight: "bold" }}>
                        Designation
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box border={1.5} borderColor="rgb(209,57,46)" style={{ width: 300 }} >
              <Grid container spacing={2} direction="column">
                  <Grid item>
                  <Box borderBottom={1} borderColor="rgb(209,57,46)">
                    <ButtonBase className={classes.image}>
                      <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.orange} >
                        B
                       </Avatar>
                     </ButtonBase>
                  </Box>
                </Grid>
              <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" style={{ fontWeight: "bolder", fontSize: "24", textAlign: "center" }}>
                        Name
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom style={{ textAlign: "center", fontWeight: "bold" }}>
                        Designation
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box border={1.5} borderColor="rgb(209,57,46)" style={{ width: 300 }} >
              <Grid container spacing={2} direction="column">
                  <Grid item>
                  <Box borderBottom={1} borderColor="rgb(209,57,46)">
                    <ButtonBase className={classes.image}>
                      <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.orange} >
                        B
                       </Avatar>
                     </ButtonBase>
                  </Box>
                </Grid>
              <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" style={{ fontWeight: "bolder", fontSize: "24", textAlign: "center" }}>
                        Name
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom style={{ textAlign: "center", fontWeight: "bold" }}>
                        Designation
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box border={1.5} borderColor="rgb(209,57,46)" style={{ width: 300 }} >
              <Grid container spacing={2} direction="column">
                  <Grid item>
                  <Box borderBottom={1} borderColor="rgb(209,57,46)">
                    <ButtonBase className={classes.image}>
                      <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.orange} >
                        B
                       </Avatar>
                     </ButtonBase>
                  </Box>
                </Grid>
              <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" style={{ fontWeight: "bolder", fontSize: "24", textAlign: "center" }}>
                        Name
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom style={{ textAlign: "center", fontWeight: "bold" }}>
                        Designation
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <div style={{display:'inline'}}>
          <button className={classes.next}> <ChevronRightIcon/> </button>
          </div>
          
          <Grid item xs={6} sm={3}>
            <Box border={1.5} borderColor="rgb(209,57,46)" style={{ width: 300 }} >
              <Grid container spacing={2} direction="column">
                  <Grid item>
                  <Box borderBottom={1} borderColor="rgb(209,57,46)">
                    <ButtonBase className={classes.image}>
                      <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.orange} >
                        B
                       </Avatar>
                     </ButtonBase>
                  </Box>
                </Grid>
              <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" style={{ fontWeight: "bolder", fontSize: "24", textAlign: "center" }}>
                        Name
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom style={{ textAlign: "center", fontWeight: "bold" }}>
                        Designation
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box border={1.5} borderColor="rgb(209,57,46)" style={{ width: 300 }} >
              <Grid container spacing={2} direction="column">
                  <Grid item>
                  <Box borderBottom={1} borderColor="rgb(209,57,46)">
                    <ButtonBase className={classes.image}>
                      <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.orange} >
                        B
                       </Avatar>
                     </ButtonBase>
                  </Box>
                </Grid>
              <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" style={{ fontWeight: "bolder", fontSize: "24", textAlign: "center" }}>
                        Name
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom style={{ textAlign: "center", fontWeight: "bold" }}>
                        Designation
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box border={1.5} borderColor="rgb(209,57,46)" style={{ width: 300 }} >
              <Grid container spacing={2} direction="column">
                  <Grid item>
                  <Box borderBottom={1} borderColor="rgb(209,57,46)">
                    <ButtonBase className={classes.image}>
                      <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.orange} >
                        B
                       </Avatar>
                     </ButtonBase>
                  </Box>
                </Grid>
              <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" style={{ fontWeight: "bolder", fontSize: "24", textAlign: "center" }}>
                        Name
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom style={{ textAlign: "center", fontWeight: "bold" }}>
                        Designation
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box border={1.5} borderColor="rgb(209,57,46)" style={{ width: 300 }} >
              <Grid container spacing={2} direction="column">
                  <Grid item>
                  <Box borderBottom={1} borderColor="rgb(209,57,46)">
                    <ButtonBase className={classes.image}>
                      <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.orange} >
                        B
                       </Avatar>
                     </ButtonBase>
                  </Box>
                </Grid>
              <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" style={{ fontWeight: "bolder", fontSize: "24", textAlign: "center" }}>
                        Name
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom style={{ textAlign: "center", fontWeight: "bold" }}>
                        Designation
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
         
            
          
        
       

         

    </div>
  );
}
export default Faculty;

