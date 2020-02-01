import React, { useRef, useEffect } from 'react';
// import './index.css'

import dat from 'dat.gui'
import { useSettingStore, settingObj } from '../../pageComponents/index'

import { useMainStore } from '../mainPage'
import { story } from '../../data/oneluckyday'



export default function DatGuiComp() {
    const customContainer = useRef();
    
    const set = useSettingStore(state => state.set)
    const index = useMainStore(state => state.index)



    useEffect(() => {
        var gui = new dat.GUI({ autoPlace: false, width: "100%" });

        var type = story[index].type
        console.log(type)

        // figure the type by pageComps[index].type , It's global.
        var f = gui.addFolder(type)

        // 1. get the name of type 2. get that specific type setting object by type 3. for loop on the setting object to inject field to datgui.
        // for loop
        var tmp = {...settingObj[type]}
        for (const key in tmp) {
            console.log(key)
            f.add(tmp, key).onFinishChange(v => { set((state) => { console.log(state[type][key]);state[type][key] = 99 }) })
        }

        //f.add({...settingObj[type]}, "color").onFinishChange(v => { set((state) => { state.title.color = `${v}` }) })
        


        f.open();
        customContainer.current.appendChild(gui.domElement)
        console.log("setting created")
    }, [])

    return (
        <div ref={customContainer}></div>
    )
}

