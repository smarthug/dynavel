import React, { useRef, useEffect } from 'react';
import './index.css'

import dat from 'dat.gui'
import { useSettingStore, settingObj } from '../../pageComponents/index'



export default function DatGuiComp() {
    const customContainer = useRef();
    const title = useSettingStore(state => state.title)
    const set = useSettingStore(state => state.set)



    useEffect(() => {
        var gui = new dat.GUI({ autoPlace: false });
        // figure the type by pageComps[index].type , It's global.
        var f = gui.addFolder("title")

        // 1. get the name of type 2. get that specific type setting object by type 3. for loop on the setting object to inject field to datgui.
        // for loop
        f.add({...settingObj["title"]}, "color").onFinishChange(v => { set((state) => { state.title.color = `${v}` }) })
        f.open();
        customContainer.current.appendChild(gui.domElement)
        console.log("setting created")
    }, [])

    return (
        <div ref={customContainer}></div>
    )
}

