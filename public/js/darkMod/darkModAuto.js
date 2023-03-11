//leia os comentarios atentamente

//implementa a função de captar o tema do usuario e aplicar o dark mod ou laight mode

//importando a classe de elementos 
import {classDarkElement} from './elements.js'
const elents = new classDarkElement
const element = elents.element


//importa a função que escreve o mod que em op para o usuario
import {elementMsgUato} from './escreverNaTela.js'
const elementescreve = elementMsgUato

export function theme(){
const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    function testtheme(){
        if(prefersColorScheme.matches){
            elementescreve()
            element.bt.setAttribute("class", "fa fa-cogs Mod")
        }   else{
            elementescreve()
            element.bt.setAttribute("class", "fa fa-cogs Mod")
        }
    }

    return testtheme
}








