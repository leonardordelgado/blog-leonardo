export class classDarkElement{
    get element() {
        const span = document.querySelector(".Temadark")
        const msg = document.querySelector(".msg")
        const bt = document.querySelector("#mod")
        const btvalue  = bt.classList.value
        return{
            span,
            msg,
            bt,
            btvalue
        }
    }
}