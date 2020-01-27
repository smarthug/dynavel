import React, {  useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'


import ParticleField from "react-particles-webgl";


const config = {
    showCube: false,
    dimension: "3D",
    velocity: 2,
    boundaryType: "passthru",
    antialias: false,
    direction: {
        xMin: -0.6,
        xMax: 0.3,
        yMin: -1,
        yMax: -0.6,
        zMin: -0.6,
        zMax: 0.3
    },
    lines: {
        colorMode: "rainbow",
        color: "#351CCB",
        transparency: 0.9,
        limitConnections: true,
        maxConnections: 20,
        minDistance: 150,
        visible: false
    },
    particles: {
        colorMode: "solid",
        color: "#ffffff",
        transparency: 0.9,
        shape: "circle",
        boundingBox: "canvas",
        count: 2500,
        minSize: 1,
        maxSize: 25,
        visible: true
    },
    cameraControls: {
        enabled: true,
        enableDamping: true,
        dampingFactor: 0.2,
        enableZoom: true,
        autoRotate: false,
        autoRotateSpeed: 0.3,
        resetCameraFlag: true
    }
};

export const cloudSetting = {
    
}

const useStyles = makeStyles(theme => ({
    cloud: cloudSetting,
    root: {
        width:"100%",
        height:"100vh"
    },
    hintOverlay: {
        position: "absolute",
        width:"100%",
        top: "25%",
        // left: "25%",
        // height: "10vh",
        pointerEvents: "none",
        // indexZ: 999,
        color: "white"
      }
}))

export default function CloudPage(props) {
    const classes = useStyles()
    



    return (
        <div className={classes.root} >
            <ParticleField config={config} />
            <h1 className={classes.hintOverlay}>운수 좋은 날 2020</h1>
        </div>
    )
}




