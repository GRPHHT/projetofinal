// Função para tocar o som baseado na tecla ou botão
function fazerSom(tecla) {
    let audio;
    switch (tecla.toLowerCase()) {
        case 'a':
            audio = document.getElementById('tom-1');
            break;
        case 's':
            audio = document.getElementById('tom-2');
            break;
        case 'd':
            audio = document.getElementById('tom-3');
            break;
        case 'j':
            audio = document.getElementById('snare');
            break;
        case 'k':
            audio = document.getElementById('crash');
            break;
        case 'l':
            audio = document.getElementById('kickbass');
            break;
        default:
            alert(`Tecla ${tecla} não tem um som associado.`);
            return;
        }
        if (audio) {
            audio.currentTime = 0; // Reiniciar o som para que ele possa ser tocado rapidamente em sucessão
            console.log(`Tocando som: ${audio.src}`);
            audio.play();
        } else {
            console.error(`Elemento de áudio não encontrado para a tecla: ${tecla}`);
        }
    }
    
// Função para adicionar animação ao botão pressionado
function botaoAnimacao(tecla) {
    let botaoAtual = document.querySelector(`.${tecla.toLowerCase()}`);
    if (botaoAtual) {
        botaoAtual.classList.add('pressed');
        setTimeout(() => {
            botaoAtual.classList.remove('pressed');
        }, 100);
    }
}

// Detectar cliques do mouse nos botões
document.querySelectorAll('.drum').forEach(botao => {
    botao.addEventListener('click', function() {
        let tecla = this.classList[0];
        fazerSom(tecla);
        botaoAnimacao(tecla);
    });
});

// Detectar pressionamento das teclas no teclado
document.addEventListener('keydown', function(event) {
    fazerSom(event.key);
    botaoAnimacao(event.key);
});
