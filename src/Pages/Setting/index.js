import React, { useRef, useEffect } from 'react';

import dat from 'dat.gui'
import { useSettingStore, settingObj } from '../../Plugins/index'

var test = {
    a: 999,
    b: 888,
    c: 777

}

export default function Setting() {
    const customContainer = useRef();
    const title = useSettingStore(state => state.title)
    const set = useSettingStore(state => state.set)



    useEffect(() => {
        var gui = new dat.GUI({ autoPlace: false });

        var f = gui.addFolder("title")
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

