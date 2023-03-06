var h1maquina = document.querySelector('.testando')
h1maquina.addEventListener('onload', Maquina())
function Maquina(){
    var data = new Date()
    var hora = data.getHours()
    var diaNoite = ""
    if( hora < 12){
        diaNoite = "Bom dia!"
    }else if(hora >= 12 && hora < 18){
        diaNoite = "Boa tarde!"
    }else{
        diaNoite = "Boa noite!"
    }
    var frases = [diaNoite, "me chamo:/","Leonardo Resende Delgado./","Sou um Desenvolvedor/","Front-end e Back-end."]
    letras(frases);
}
function letras(frases){
    var teste = ""
    for(var i  of frases){
        teste += i + " "
    }   
    var arrayPalavras = teste.split("")
    escreva(arrayPalavras)
}
function escreva(arrayPalavras){
    var h1maquina = document.querySelector('.testando')
    h1maquina.innerHTML = ""
    arrayPalavras.forEach((letra, i)=>{
        setTimeout(()=> h1maquina.innerHTML += letra.replace("/", "<br>"), 200 * i)
    } )
}