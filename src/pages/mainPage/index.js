import React, { createRef } from 'react'
import SwipeableViews from "react-swipeable-views";
import { virtualize, bindKeyboard } from "react-swipeable-views-utils";
import { makeStyles } from '@material-ui/core/styles'

import { Plugins } from "../../pageComponents"

import { story } from '../../data/oneluckyday'

import create from 'zustand'
import produce from "immer"

export const [useMainStore] = create(set => ({
    index: 0,
    setIndex: index => set({ index: index }),
    set: fn => set(produce(fn)),
}))


var index = createRef(0);


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
    const index = useMainStore(state => state.index)
    const setIndex = useMainStore(state => state.setIndex)


    const handleChangeIndex = index => {
        setIndex(index)
    };

    return (
        <div className={classes.root}>

            <VirtualizeSwipeableViews
                index={index}
                slideRenderer={SlideRenderer}
                slideCount={story.length}
                onChangeIndex={handleChangeIndex}
            />
        </div>
    )
}

