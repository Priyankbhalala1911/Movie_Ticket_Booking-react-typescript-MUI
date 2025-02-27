import {createTheme } from "@mui/material";

export const customColors = {
    pastelYellow: "#F2C46F",
    xxiGradientStart: "#F2C46F",
    xxiGradientEnd: "#C6943F",
    cinepolisBlue: "#000E62",
  }
const Theme = createTheme({
    palette:{
        primary:{
            main:"#1A2C50",
            contrastText:"#FFFFFF"
        },
        secondary:{
            main:"#EC1E2B"
        },
        warning:{
            main:"#FFBE00"
        },
        info:{
            main:"#118EEA"
        },
        error:{
            main:"#FF6B6B"
        },
        background:{
            default:"#FFFFFF"
        },
        
    },
    typography:{
			fontFamily:'Roboto',
        h1:{
            fontSize:"2.25rem",
            fontWeight:700
        },
        h2:{
            fontSize:"2rem",
            fontWeight:700
        },
        h3:{
            fontSize:"1.75rem",
            fontWeight:600
        },
        h4:{
            fontSize:"1.5rem",
            fontWeight:600
        },
        h5:{
            fontSize:"1.25rem",
            fontWeight:500
        },
        h6:{
            fontSize:"1.125rem",
            fontWeight:500,
						textTransform:"capitalize"
        },
        body1:{
            fontSize:"1rem"
        },
        body2:{
            fontSize:"0.875rem"
        },
        subtitle1:{
            fontSize:"1.125rem"
        },
        subtitle2:{
            fontSize:"1.25rem"
        }

    },	
    
})

export default Theme;