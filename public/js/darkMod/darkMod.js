
import { theme } from './darkModAuto.js'
const themeaut = theme()

import { modDark } from './modDark.js'
const dark = modDark

import { modDarkIcon } from './modDark.js'
const darkIcon = modDarkIcon

import { modWhite } from './modWhite.js'
const white = modWhite

import { modWhiteIcon } from './modWhite.js'
const whiteIcon = modWhiteIcon

import {classDarkElement} from './elements.js'
const elents = new classDarkElement
const element = elents.element


themeaut()

   element.bt.addEventListener("click", darkMod)

 function darkMod(){
    const bt = document.querySelector("#mod")

    console.log(bt.classList.value)
    if(bt.classList.value.indexOf("Auto")> -1){
        themeaut()

    }else{
        if(bt.classList.value.indexOf("fa-sun-o") == -1){
            whiteIcon()
            white()
        }else if(bt.classList.value.indexOf("fa-moon-o")== -1){
            darkIcon()
            dark()
        }
    }
 }
