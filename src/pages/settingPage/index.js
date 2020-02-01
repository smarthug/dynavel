import React, { useRef, useEffect } from 'react';
import './index.css'






import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Settings';

import DatGuiComp from './datguiComp'



const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },

    tempSettingBtn: {
        position: "absolute",
        zIndex: 3,
        backgroundColor: "#11ffee00",
        color: "white"
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function App() {

    const classes = useStyles();
    // 글로벌 관리 ?
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            {/* <button className={classes.tempSettingBtn} onClick={handleClickOpen}>Setting</button> */}
            <Fab className={classes.tempSettingBtn} onClick={handleClickOpen} aria-label="add">
                <AddIcon />
            </Fab>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Sound
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <List style={{padding: "0px"}} >
                    <DatGuiComp />
                </List>
            </Dialog>
        </div>


    );
}

export default App;


