import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { useSettingStore } from './index'

export const textSetting = {
  fontSize: 16,
  display: "relative",

 
  lineHeight: "2rem",
  letterSpacing: "normal",
  whiteSpace: "pre-line",
}


const useStyles = makeStyles(theme => ({
  page: {
    margin: "0% 0%",
    backgroundColor: "white",


    padding: "14.3% 12.5%",

  },
  swiperSlide: textSetting
}))


export default function TextPage(props) {
  const classes = useStyles()
  const fontSize = useSettingStore(state => state.text.fontSize)
  const set = useSettingStore(state => state.set)
  set((state)=>{state.text.fontSize=24})
  console.log(window.innerWidth)


  return (
    <div className={classes.page} style={{ height: 1.414 * window.innerWidth }}>

      <div className={classes.swiperSlide} style={{fontSize: fontSize}} >
        {props.v.text}
      </div>
    </div>

  )

}

