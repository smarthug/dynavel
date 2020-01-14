import create from 'zustand'
import produce from "immer"

import TextPage from './text'
import TitlePage, { titleSetting } from './title'



export const Plugins = {
    title: TitlePage,
    text: TextPage,
}

export const [useSettingStore] = create(set => ({
    nested: { structure: { contains: { a: "value" } } },
    title: titleSetting,
    set: fn => set(produce(fn)),
}))

export const settingObj = {
    title: titleSetting
}