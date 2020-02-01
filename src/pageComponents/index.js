import create from 'zustand'
import produce from "immer"

import TextPage, {textSetting} from './text'
import TitlePage, { titleSetting } from './title'
import snowPage from './snow'



export const Plugins = {
    title: TitlePage,
    text: TextPage,
    snow: snowPage,
}

export const [useSettingStore] = create(set => ({
    nested: { structure: { contains: { a: "value" } } },
    title: titleSetting,
    text: textSetting,
    set: fn => set(produce(fn)),
}))

export const settingObj = {
    title: titleSetting,
    text: textSetting
}