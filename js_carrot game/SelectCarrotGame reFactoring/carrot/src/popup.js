"use strict";
export default class PopUp {
    constructor() {
        this.popUp = document.querySelector(".pop-up");
        this.popUpRefresh = document.querySelector(".pop-up__refresh");
        this.popUpMsg = document.querySelector(".pop-up__message");
        this.popUpRefresh.addEventListener("click", () => {
            this.onClick && this.onClick();
            this.hide();
        })
    }
    setClickListener(onClick){
        this.onClick = onClick;
    }

    hide() {
        this.popUp.classList.add("pop-up--hide");
    }

    show(text) {
        this.popUpMsg.innerText = text;
        this.popUp.classList.remove("pop-up--hide");
    }
}