import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CoverPhoto from '../../../assets/images/cover.png';
import {
    DownArrow,
    SkillBar
  } from '../../elements';

const useStyles = makeStyles((theme) => ({
    container:{
      width:'100%',
      height:'100vh',
      position:'relative',
      backgroundColor:props=>props.darkMode?'#000000':'#ffffff',
      display:'flex',
      [theme.breakpoints.down('sm')]:{
        flexDirection:'column'
      }
    },
    firstSection:{
        width:'50%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        paddingRight:'40px',
        paddingLeft:'40px',
        color:props=>props.darkMode?'#ffffff':'#000000',
        [theme.breakpoints.down('sm')]:{
          width:'100%',
          height:'50%',
          paddingLeft:'5px',
          paddingRight:'5px'
        }
    },
    SecondSection:{
        width:'50%',
        height:'100%',
        paddingLeft:'20px',
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            height:'50%',
            paddingLeft:'0px',
            paddingRight:'0px'
        }
    },
    avatar:{
        width:'163px',
        height:'200px',
        marginTop:'25%',
        [theme.breakpoints.down('sm')]:{
            marginTop:'5%'
        }
    },
    heading:{
        fontFamily:'cursive',
        fontWeight:'bold',
        marginTop:'2%'
    },
    about:{
        fontFamily:'cursive',
        marginTop:'3%',
        padding:'0px 10px',
        [theme.breakpoints.down('sm')]:{
            marginTop:'1px',
            fontSize:'0.7rem'
        }
    },
    skillBarContainer:{
        width:'100%',
        height:'75%',
        marginTop:'25%',
        paddingLeft:'20px',
        paddingRight:'20px',
        [theme.breakpoints.down('sm')]:{
            marginTop:'30px',
            height:'90%',
            paddingLeft:'10px',
            paddingRight:'10px',
        }
    }
}));

const data = [
    { skill:'React JS' , bgcolor: "#09dee6", completed: 70  },
    { skill:'Django' , bgcolor: "#00695c", completed: 80 },
    { skill:'Javascript' , bgcolor: "#e2e620", completed: 80 },
    { skill:'Material UI' , bgcolor: "#1068e3", completed: 60 },
    { skill:'Bootstrap' , bgcolor: "#7c31de", completed: 90 },
    { skill:'HTML' , bgcolor: "#e67920", completed: 100 },
    { skill:'CSS' , bgcolor: "#1068e3", completed: 75 },
  ];


function SecondSection({darkMode}) {
    const classes=useStyles({darkMode});

    return(
        <div className={classes.container} id='about'>
            <div className={classes.firstSection}>
                <Avatar 
                    alt="Remy Sharp" 
                    variant='square' 
                    src={CoverPhoto} 
                    className={classes.avatar} 
                />
                <Typography variant="h6" gutterBottom className={classes.heading}>
                    Who's this guy?
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.about}>
                    I'm a post graduate in Computer Science.Currently I'm working as Full-Stack-Developer at Kochi.
                    And I'm also interested in Data Science, Data Engineering, Machine Learning etc.
                    You can see my skillset Here...
                </Typography>
            </div>
            <div className={classes.SecondSection}>
                <div className={classes.skillBarContainer}>
                    {data.map((item, idx) => (
                        <SkillBar key={idx} 
                                  skill={item.skill} 
                                  bgcolor={item.bgcolor} 
                                  completed={item.completed} 
                                  darkMode={darkMode} 
                        />
                    ))}
                </div>
            </div>
            <DownArrow targetDiv='contact' darkMode={darkMode}/>
        </div>
    )
    
}

export default SecondSection;