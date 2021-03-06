import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSettingStore } from './index'


export const titleSetting = {
    color: "white",
    textAlign: "center",
    title: 'hihi'
}

const useStyles = makeStyles(theme => ({
    title: titleSetting
}))

export default function TitlePage(props) {
    const classes = useStyles()
    //const state = useSettingStore();
    const color = useSettingStore(state => state.title.color)

    return (
        <div>

            <h1 className={classes.title} style={{ color: color }}>{props.v.title}</h1>

        </div>
    )
}




