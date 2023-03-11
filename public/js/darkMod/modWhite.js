import {classDarkElement} from './elements.js'
const elents = new classDarkElement
const element = elents.element


import { elementMsgwhite } from './escreverNaTela.js'
const elementescreve = elementMsgwhite



export function modWhite(){
    
}
export function modWhiteIcon(){
    element.bt.setAttribute("class", "fa fa-sun-o Mod")
    elementescreve()
}