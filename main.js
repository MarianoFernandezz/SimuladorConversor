// Funcion que nos servira para calcular el cambio de pesos a dolares / pesos a euros

function cambioDivisa() {
    let resultado = 0;
    let dolar = 312;
    let euro = 177;
    let PreguntaIntro = prompt("Si usted desea convertir de pesos a dolares, ingrese 1. \nEn caso de que quiera convertir a Euros ingrese 2.");

    if (PreguntaIntro === "1") {
        let ConversionDolar = parseFloat(prompt("Ingrese la cantidad en pesos"));
        resultado = ConversionDolar / dolar;
        return alert("Usted recibira" + " " + resultado.toFixed(2) + " " + "dolares" + " " + "a cambio de sus" + " " + ConversionDolar + " " + "pesos");
    } else if (PreguntaIntro === "2") {
        let ConversionEuro = parseFloat(prompt("Ingrese la cantidad en pesos"));
        resultado = ConversionEuro / euro;
        return alert("Usted recibira" + " " + resultado.toFixed(2) + " " + "euros" + " " + "a cambio de sus" + " " + ConversionEuro + " " + "pesos");
    }
    else alert("Error");
}

console.log(cambioDivisa());
