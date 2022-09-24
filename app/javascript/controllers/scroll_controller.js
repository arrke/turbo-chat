import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    /** OnStart **/
    connect() {
        console.log("Connected")
        const messages = document.querySelector("#messages");
        messages.addEventListener("DOMNodeInserted", this.resetScroll)
        this.resetScroll(messages)
    }
    //OnStop
    disconnect(){
        console.log("Disconnected")
    }
    //Custom function
    resetScroll(){
        messages.scrollTop = messages.scrollHeight - messages.clientHeight
    }
}