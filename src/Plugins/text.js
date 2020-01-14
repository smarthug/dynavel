import React from 'react'

import { makeStyles } from '@material-ui/core/styles'





const useStyles = makeStyles(theme => ({
    page: {
        margin: "0% 0%",
        backgroundColor:"white",
       
       
        padding: "14.3% 12.5%",
      
    },
   swiperSlide: {

    display:"relative",
      
      fontSize: "1rem",
      lineHeight: "2rem",
      letterSpacing: "normal",
      whiteSpace: "pre-line",
      
  
   }
}))


export default function TextPage(props) {
   const classes = useStyles()
 
   console.log(window.innerWidth)


   return (
     <div className={classes.page} style={{height:1.414*window.innerWidth}}>

         <div className={classes.swiperSlide} >
           {props.v.text}
         </div>
     </div>
    
   )

}

