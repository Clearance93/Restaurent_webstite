
const messageFlow = document.querySelector("message");

messageTake = () => {
    if(messageFlow != null) {
        document.getElementById("msg").innerHTML = messageFlow;
        console.log(messageFlow)
    }

}

messageTake();


function getToday(){
    let today = new Date();
    hourd = today.getHours();
    minutes = today.getMinutes();
}

if(minutes < 10) {
    minutes = "" + minutes
}

if(hours < 10){
    hours = "" + hours
}

let time = houes + ":" + minutes;
return time;  


function getHardResposnse(userText){
    let botResponse = geBotResposnce(userText);
    let botHtml = `<p class="botText"><span> ${ botResponse } </span></p>`;
    $("#message").append(botHtml);
}


function getHardResposnse(input){
    if(input === text){
        return "Thank for the feedback we really spprciste your input. We will verfy your thoughts, you are one of the valued customer and we love you."
    } else {
        return "Please enter some text or give us some feedback about our services."
    }
}


function getResponse() {
    let  userText = $(".message").val();

    if(userText == "") {
        userText = "We love you all!"
    }

    let userText = `<p class="usertext"><span> ${ userText } </span></p>`;

    $("#send").val("");
    $(".message").append(userHtml);
    document.getElementById("message").scrollIntoView(true);


    setTimeout(() => {
        getHardResposnse(userText);
    }, 2000);
}

function sendButton() {
    getResponse();
}

