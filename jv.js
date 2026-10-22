let numeroSecreto = Math.floor(Math.random() * 10) + 1;

function verificar() {
    let palpite=document.getElementById("inputNumero").Value;
    let mensagem=document.getElementById("mensagem");

    if (palpite == numeroSecreto) {
        mensagem.innerText = "você acertou :3";
    }  else if (palpite < numeroSecreto) {
        mensagem.innerText = "Tente um número maior!";
    }  else {
        mensagem.innerText = "Tente um número menor!";
    }
}
       