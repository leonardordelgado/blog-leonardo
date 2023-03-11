import  {moments} from "./moments.js"
const momentsClass = new moments
const Hora = momentsClass.moment.hours
 
export class msgMoments{
    get msg(){
        if(Hora >= 0 && Hora <5){
            return {MSG:"Boa madrugada!",
                    HORA:Hora}
        }else if(Hora >=5 && Hora <12){
            return {MSG:"Bom dia!",
                   HORA:Hora}
        }else if(Hora >=12 && Hora <18){
            return {MSG:"Boa tarde!",
                   HORA:Hora}
        }else if(Hora >= 18){
            return {MSG:"Boa noite!",
                   HORA:Hora}
        }
    }
}