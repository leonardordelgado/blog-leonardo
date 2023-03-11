//importando a classe de elementos 
import {classDarkElement} from './elements.js'
const elents = new classDarkElement
const element = elents.element



//importa a função que escreve o mod que em op para o usuario
import {elementMsgDark} from './escreverNaTela.js'
const elementescreve = elementMsgDark



export function modDark(){
    
}
export function modDarkIcon(){
    element.bt.setAttribute("class", "fa fa-sun-o Mod Auto")
    elementescreve()
}