
const messageFlow = document.querySelector("message");

messageTake = () => {
    if(messageFlow != null) {
        document.getElementById("msg").innerHTML = messageFlow;
        console.log(messageFlow)
    }
}

messageTake();