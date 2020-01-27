import React from 'react'
import SwipeableViews from "react-swipeable-views";
import { virtualize, bindKeyboard } from "react-swipeable-views-utils";
import { makeStyles } from '@material-ui/core/styles'

import { Plugins } from "../../Plugins"

import { story } from '../../data/oneluckyday'


const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "black",
        height: "100vh"

    },
    page: {
        display: "flex",
        alignItems: "center",
        justifyContent: ""
    }
}))


function SlideRenderer(props) {

    const { index, key } = props;

    var PageComponent = Plugins[story[index].type]
    var tmp = story[index]

    return (
        <div style={{ "display": "flex", "alignItems": "center", "height": "100vh", "justifyContent": "center" }} key={key} >
            <PageComponent v={tmp} />
        </div>
    );
}

export default function Main() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
           
            <VirtualizeSwipeableViews

                slideRenderer={SlideRenderer}
                slideCount={story.length}
            />
        </div>
    )
}

