

import {msgMoments} from './momentsmsg.js'
const msgCumprimento = new msgMoments
const maquina = document.querySelector('.maquina')

const arrayFrasesMaquina = [`${msgCumprimento.msg.MSG} me chamo:`,"Leonardo Resende Delgado.",
"Sou um Desenvolvedor","Front-end e Back-end."]

const arrayString = arrayFrasesMaquina.toString(
    function(){
        return arrayFrasesMaquina
    }
)
const letraAletra = arrayString.split("")

letraAletra.forEach((letras,i)=>{
    const letra = letras.replace(",","<br>")
    setTimeout(()=>maquina.innerHTML +=letra, 200*i)
})
