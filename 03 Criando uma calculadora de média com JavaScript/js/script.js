//inserir notas no input
const notaUm = document.querySelector(".nota1");
const notaDois = document.querySelector(".nota2");
const notaTres = document.querySelector(".nota3");
//calculo da media
const mediaFinal = calculaMedia(notaUm, notaDois, notaTres);
//botões
const botaoCalcula = document.getElementById("button");
const botaoApaga = document.querySelector("#limpaInput");
//frases
const mediaFrase = document.querySelector(".media-titulo");

//função que calcula a media
function calculaMedia(n1, n2, n3) {

    return (Math.round((n1 + n2 + n3) / 3));

};

//evento de clique para calcular média
botaoCalcula.addEventListener("click", function () {

    const notaUm = parseFloat(document.querySelector(".nota1").value);
    const notaDois = parseFloat(document.querySelector(".nota2").value);
    const notaTres = parseFloat(document.querySelector(".nota3").value);
    const mediaFinal = calculaMedia(notaUm, notaDois, notaTres);


    if ((mediaFinal >= 7) && (mediaFinal <= 10)) {

        mediaFrase.textContent = `Parabéns! Você foi aprovado com a média ${mediaFinal}.`;
        mediaFrase.classList.add("aprovacao");
        mediaFrase.classList.remove("reprovacao");
        mediaFrase.classList.remove("mensagem-de-erro");
    }

    if ((mediaFinal < 7) && (mediaFinal >= 0)) {

        mediaFrase.textContent = `Você não atingiu o esperado com a média ${mediaFinal}.`;
        mediaFrase.classList.add("reprovacao");
        mediaFrase.classList.remove("aprovacao");
        mediaFrase.classList.remove("mensagem-de-erro");

    }

    if (isNaN(notaUm) || isNaN(notaDois) || isNaN(notaTres)) {

        mediaFrase.textContent = `*Favor preencher todos os campos corretamente`;
        mediaFrase.classList.add("mensagem-de-erro");
        mediaFrase.classList.remove("aprovacao");
        mediaFrase.classList.remove("reprovacao");

    }
    
    if ((notaUm < 0) || (notaUm > 10) || (notaDois < 0) || (notaDois > 10) || (notaTres < 0) || (nota3 > 10)) {

        mediaFrase.textContent = `*Nota inválida, favor preencher com uma nota de 0 a 10.`;
        mediaFrase.classList.add("mensagem-de-erro");

    }

});

//função que limpa os inputs
function limpaInput() {
    document.querySelector(".nota1").value = "";
    document.querySelector(".nota2").value = "";;
    document.querySelector(".nota3").value = "";;
    mediaFrase.classList.remove("reprovacao");
    mediaFrase.classList.remove("mensagem-de-erro");
    mediaFrase.classList.remove("aprovacao");
    mediaFrase.textContent = "A média obtida foi: "

};

//evento de clique para limpar os inputs
botaoApaga.addEventListener("click", limpaInput);


