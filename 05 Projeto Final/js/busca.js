const cards = [
    {
        titulo: "Björk",
        ano: " (1977)",
        imagem: "/img/disco1.jpg",
        link: "https://www.youtube.com/watch?v=3du0GpXE5WY",

    },
    {
        titulo: "Glin-Gló",
        ano: " (1990)",
        imagem: "/img/disco2.jpg",
        link: "https://open.spotify.com/album/2sQPWw7fUNaasm5B0wRkOk?si=r6WQ8GB7R5SoOCdHiksKWA",
    },
    {
        titulo: "Debut",
        ano: " (1993)",
        imagem: "/img/disco3.jpg",
        link: "https://open.spotify.com/album/2Fb37JsRMVPASJcl3wwDOa?si=bjgZ5QMzRFOCdRIE4D5R_g",
    },
    {
        titulo: "Post",
        ano: " (1995)",
        imagem: "/img/disco4.jpg",
        link: "https://open.spotify.com/album/3p7WXDBxhC5KS9IFXnwae7?si=f-BJyk2JRHi84HjVWeb9Ow",
    },
    {
        titulo: "Homogenic",
        ano: " (1997)",
        imagem: "/img/disco5.jpg",
        link: "https://open.spotify.com/album/3knDOJUQBAATXsKYLWO4k8?si=r86JMemkTZO5wVCXiQuigA",
    },
    {
        titulo: "Selma Songs",
        ano: " (2000)",
        imagem: "/img/disco6.jpg",
        link: "https://open.spotify.com/album/7r2Viryrm2jIyfb7XcFe20?si=M5UurQaITbCQZsQUDmlRDg",
    },
    {
        titulo: "Vespertine",
        ano: " (2001)",
        imagem: "/img/disco7.jpeg",
        link: "https://open.spotify.com/album/4u3MPfHM60rFFULJebZIay?si=BCzPGPceTh2h8PRCnRHXAA",
    },
    {
        titulo: "Medúlla",
        ano: " (2004)",
        imagem: "/img/disco8.jpg",
        link: "https://open.spotify.com/album/12n9nyAJ5Q4FHRldrciIPG?si=EgIZYkfHSn-1ZwEH1ePa8w",
    },
    {
        titulo: "Drawing Restraint 9",
        ano: " (2005)",
        imagem: "/img/disco9.jpg",
        link: "https://open.spotify.com/album/3LK0mVPpPgTF8guMEeRU81?si=mPgdZXgkSymaBfJvfTrhzA",
    },
    {
        titulo: "Volta",
        ano: " (2007)",
        imagem: "/img/disco10.jpg",
        link: "https://open.spotify.com/album/64EKrS1Ubw2rQ9qn9QRUq3?si=jeeaXmE-TLWWhKDlx9qHYA",
    },
    {
        titulo: "Biophilia",
        ano: " (2011)",
        imagem: "/img/disco11.jpg",
        link: "https://open.spotify.com/album/5GV4CBWPqU7P05KUaKyDZ1?si=tBcK6Z3TTs-I2Ps9ffxthw",
    },
    {
        titulo: "Vulnicura",
        ano: " (2015)",
        imagem: "/img/disco12.png",
        link: "https://open.spotify.com/album/7FNtMOO3btvce2G5paXtsE?si=28QlUfzASeeC1B-M-UCQnQ",
    },
    {
        titulo: "Utopia",
        ano: " (2017)",
        imagem: "/img/disco13.jpg",
        link: "https://open.spotify.com/album/2i0mqPNTcaLcmKWSMsE3c8?si=wVweQ8AuT32lce4E89E0FA",
    },

];

const botao = document.querySelector('#botaoDisco');
const input = document.querySelector('#inputDisco');
const cardsDisco = document.querySelector('#cardsDisco');
const mensagemDeErro = document.querySelector('#erroDisco');
const form = document.querySelector('#form');
const limpaBusca = document.querySelector('#limpaBusca');
const busca = input.value.toLowerCase().trim();

//carrega os cards quando a tela é iniciada
window.onload = function () {
    for (let i = 0; i < cards.length; i++) {
        cardsDisco.innerHTML += `
            <div class="disco-link">
                <a class="disco-link" href="${cards[i].link}" target="_blank">
                    <img class="card" src="${cards[i].imagem}"/>
                    <figcaption class="card-caption">${cards[i].titulo}${cards[i].ano}</figurecaption>
                </a>
            </div>
         `
    }
};

//mecanismo de busca
botao.addEventListener('click', function () {
    const busca = input.value.toLowerCase().trim();
    if (busca.length === 0) {
        return mensagemDeErro.innerHTML = '*digite o nome do disco';
    };
    if (busca.length !== cards.titulo) {
        mensagemDeErro.innerHTML = `<p class="erro-disco">*Disco não encontrado no catálogo. Tente novamente.</p>`;
        form.reset();
    }
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].titulo.toLowerCase().includes(busca)) {
            cardsDisco.innerHTML = "";
            mensagemDeErro.innerHTML = "";

            cardsDisco.innerHTML += `
                  <div class="disco-link">
                      <a class="disco-link" href="${cards[i].link}" target="_blank">
                          <img class="card" src="${cards[i].imagem}"/>
                          <figcaption class="card-caption">${cards[i].titulo}</figurecaption>
                      </a>
                  </div>`
            form.reset();

        }
    };
});

//limpa a busca e carrega novamente a discografia completa
limpaBusca.addEventListener('click', function () {
    cardsDisco.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {

        mensagemDeErro.innerHTML = "";

        cardsDisco.innerHTML += `
                  <div class="disco-link">
                      <a class="disco-link" href="${cards[i].link}" target="_blank">
                          <img class="card" src="${cards[i].imagem}"/>
                          <figcaption class="card-caption">${cards[i].titulo}</figurecaption>
                      </a>
                  </div>`
        form.reset();
    }

});


// var s = "hello world!";
// if (s.match(/hello.*/)) {
//   // do something
// }

// https://stackoverflow.com/questions/1315224/javascript-operator-similar-to-sql-like