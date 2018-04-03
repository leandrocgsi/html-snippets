date = new Date();
hour = date.getHours();
var greeting = "";
var element = document.getElementById("greeting");

if (element) {

    if (hour > 1 && hour < 6) {
        greeting = "Boa Madrugada!";
    } else if (hour >= 6 && hour <= 11) {
        greeting = "Bom Dia!";
    } else if (hour > 11 && hour < 18) {
        greeting = "Boa tarde!";
    } else {
        greeting = "Boa noite!";
    }
    document.title = "Bem vindo - " + greeting;
    element.innerHTML = greeting;
}