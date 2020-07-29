const sobreMim = document.querySelector('#sobreMain');
const sobreBotao = document.querySelector('#sobreBotao');


sobreBotao.addEventListener('click', function () {
    sobreMim.innerHTML = `
    <img src="/img/lucia.jpg" class="sobre-img">
    <p class="sobre-p">Olá, me chamo Lúcia Vulcano e sou desenvolvedora front-end! 
    Você pode acessar meu portifólio no <a href="https://github.com/luciavulcano" target="_blank"><u>GitHub</u></a> e meu currículo no <a href="https://www.linkedin.com/in/luciavulcano/" target="_blank"><u>LinkedIn.</u></a>
    </p>`
    sobreMim.classList.toggle('visible');
});
