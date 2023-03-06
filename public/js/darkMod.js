 const nav = document.querySelector(".position")
 nav.addEventListener("onload", automatic())

 const bt = document.querySelector(".Mod")
 bt.addEventListener("click", darkMod)

 
 function automatic(){
    var data = new Date()
    var hora = data.getHours()
    darkModAuto(hora)
 }
 function darkModAuto(h){
    const bt = document.querySelector(".Mod")
    var span = document.querySelector(".Temadark")
    var msg = document.querySelector(".msg")
        span.innerHTML=""
        msg.innerHTML=""
        span.innerHTML="Tema Auto"
        msg.innerHTML="Tema Auto"

    if(h >= 6 && h <18){
        bt.classList.add("fa-cogs")
        bt.classList.remove("fa-moon-o")
        bt.classList.remove("fa-sun-o")
        bt.classList.remove("Auto")
        
    }else if(h >=18){
        bt.classList.add("fa-cogs")
        bt.classList.remove("fa-sun-o")
        bt.classList.remove("fa-moon-o")
        bt.classList.remove("Auto")
    }
 }

 function darkMod(){
    const bt = document.querySelector(".Mod")
    var btfunciona = document.querySelector(".Mod").classList.value
    var span = document.querySelector(".Temadark")
    var msg = document.querySelector(".msg")
    if(btfunciona.indexOf("Auto")> -1){
        automatic()

    }else{
        if(btfunciona.indexOf("fa-sun-o") == -1){
            bt.classList.remove("fa-cogs")
            bt.classList.remove("fa-moon-o")
            bt.classList.add("fa-sun-o")
            bt.classList.remove("Auto")
            span.innerHTML=""
            msg.innerHTML=""
            span.innerHTML="Tema Claro"
            msg.innerHTML="Tema Claro"
        }else if(btfunciona.indexOf("fa-moon-o")== -1){
            bt.classList.remove("fa-cogs")
            bt.classList.remove("fa-sun-o")
            bt.classList.add("fa-moon-o")
            bt.classList.add("Auto")
            span.innerHTML=""
            msg.innerHTML=""
            span.innerHTML="Tema Escuro"
            msg.innerHTML="Tema Escuro"
        }
    }
 }
