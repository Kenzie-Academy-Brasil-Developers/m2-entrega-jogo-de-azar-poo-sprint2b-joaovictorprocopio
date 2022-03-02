// Escreva seu código aqui
import {Jogador}  from "./models/index.js"

const body = document.querySelector("body");

const tituloDoJogo = document.createElement("h1");
tituloDoJogo.innerText = "Jokenpo";

const caixaJogo = document.createElement("div");
caixaJogo.classList.add("box");

//Criando jogadores
const player = new Jogador();

const bot = new Jogador("Batata!");

//Primeira tela

const modelContainer = document.createElement("div");
modelContainer.classList.add('model--container');

const model = document.createElement("div");
model.classList.add('model');

const tituloRegras = document.createElement("h2");
tituloRegras.classList.add("tituloRegras")
tituloRegras.innerText = "Regras e Apelido"

const listaRegras = document.createElement("ul");

const regraUm = document.createElement("li");
regraUm.innerText = "Apenas uma jogada pode ser escolhida por vez."
regraUm.classList.add("regras")

const regraDois = document.createElement("li");
regraDois.innerText = "Após selecionada, o ganhador será definido por uma das regras abaixo:"
regraDois.classList.add("regras")

const regraTres = document.createElement("li");
regraTres.innerText = "Pedra vence tesoura."
regraTres.classList.add("regras")

const regraQuatro = document.createElement("li");
regraQuatro.innerText = "Papel vence pedra."
regraQuatro.classList.add("regras")

const regraCinco = document.createElement("li");
regraCinco.innerText = "Tesoura vence papel."
regraCinco.classList.add("regras")

const regraSeis = document.createElement("li");
regraSeis.innerText = "Em caso de mãos iguais, será empate e não será marcado ponto para nenhum dos jogadores."
regraSeis.classList.add("regras")

listaRegras.appendChild(regraUm);
listaRegras.appendChild(regraDois);
listaRegras.appendChild(regraTres);
listaRegras.appendChild(regraQuatro);
listaRegras.appendChild(regraCinco);
listaRegras.appendChild(regraSeis);

const apelido = document.createElement("input");
apelido.type = "text"
apelido.placeholder = "Insira aqui seu apelido"
apelido.required = true

const btn = document.createElement('button');
btn.innerText = "Continuar";

model.appendChild(tituloRegras);
model.appendChild(listaRegras);
model.appendChild(apelido);
model.appendChild(btn);
modelContainer.appendChild(model);

body.appendChild(modelContainer)

btn.addEventListener('click', event => {
    body.removeChild(modelContainer);
    player.nome = apelido.value;
    nomeDoJOgador.innerText = player.nome;
});

//Botão para continuar jogada

const modelContainerJogada = document.createElement("div");
modelContainerJogada.classList.add('model--container');

const btnJogada = document.createElement('button');
btnJogada.classList.add("btnJogada")
btnJogada.innerText = "Continuar";

modelContainerJogada.appendChild(btnJogada);

btnJogada.addEventListener('click', event => {
    jogadaDoBot()
    ganhador()
    body.removeChild(modelContainerJogada);
    body.appendChild(modelContainerInfo);
});

//Função que decide a jogada do bot

const jogadaDoBot = ()=>{
    let count = Math.floor(Math.random() * (4 - 1) + 1);
    if(count === 1){
        bot.pedra();
    }
    else if(count === 2){
        bot.papel();
    }
    else if(count === 3){
        bot.tesoura();
    }
}

//Tela que informa quem ganhou

const modelContainerInfo = document.createElement("div");
modelContainerInfo.classList.add('model--container');

const modelInfo = document.createElement("div");
modelInfo.classList.add('model');
modelInfo.classList.add('info');

const vencedorInfo = document.createElement("h2");
vencedorInfo.classList.add("vencedorInfo")

const boxMaos = document.createElement("div");
boxMaos.classList.add("boxMaos");

const maoJogador = document.createElement("img");

const versus = document.createElement("h3");
versus.classList.add("versus")
versus.innerText = "VS"

const maoBot = document.createElement("img");
maoBot.classList.add("maoBot")

const btnInfo = document.createElement("button");
btnInfo.classList.add("btnInfo")
btnInfo.innerText = "Ok"

boxMaos.appendChild(maoJogador);
boxMaos.appendChild(versus);
boxMaos.appendChild(maoBot);

modelInfo.appendChild(vencedorInfo);
modelInfo.appendChild(boxMaos);
modelInfo.appendChild(btnInfo);

modelContainerInfo.appendChild(modelInfo);

btnInfo.addEventListener("click", event => {
    body.removeChild(modelContainerInfo);
})

//Função que decide o ganhador 

const ganhador = () =>{
    if(player.mao === "pedra" && bot.mao === "tesoura"){
        vencedorInfo.innerText = "Você venceu!!!"
        maoJogador.src = "./src/imgs/pedraJogador.png"
        maoBot.src = "./src/imgs/tesouraBot.png"
        player.aumentarPontos()
        pontosJogador.innerText = player.pontos
    }
    else if(player.mao === "pedra" && bot.mao === "papel"){
        vencedorInfo.innerText = "Você perdeu para uma batata kk"
        maoJogador.src = "./src/imgs/pedraJogador.png"
        maoBot.src = "./src/imgs/papelBot.png"
        bot.aumentarPontos()
        pontosBot.innerText = bot.pontos
    }
    else if(player.mao === "pedra" && bot.mao === "pedra"){
        vencedorInfo.innerText = "Empate!!!"
        maoJogador.src = "./src/imgs/pedraJogador.png"
        maoBot.src = "./src/imgs/pedraBot.png"
    }
    else if(player.mao === "papel" && bot.mao === "pedra"){
        vencedorInfo.innerText = "Você venceu!!!"
        maoJogador.src = "./src/imgs/papelJogador.png"
        maoBot.src = "./src/imgs/pedraBot.png"
        player.aumentarPontos()
        pontosJogador.innerText = player.pontos
    }
    else if(player.mao === "papel" && bot.mao === "tesoura"){
        vencedorInfo.innerText = "BATATA WIIINS!!!"
        maoJogador.src = "./src/imgs/papelJogador.png"
        maoBot.src = "./src/imgs/tesouraBot.png"
        bot.aumentarPontos()
        pontosBot.innerText = bot.pontos
    }
    else if(player.mao === "papel" && bot.mao === "papel"){
        vencedorInfo.innerText = "Empate!!!"
        maoJogador.src = "./src/imgs/papelJogador.png"
        maoBot.src = "./src/imgs/papelBot.png"
    }
    else if(player.mao === "tesoura" && bot.mao === "papel"){
        vencedorInfo.innerText = "Você venceu!!!"
        maoJogador.src = "./src/imgs/tesouraJogador.png"
        maoBot.src = "./src/imgs/papelBot.png"
        player.aumentarPontos()
        pontosJogador.innerText = player.pontos
    }
    else if(player.mao === "tesoura" && bot.mao === "pedra"){
        vencedorInfo.innerText = "Você perdeu!!!"
        maoJogador.src = "./src/imgs/tesouraJogador.png"
        maoBot.src = "./src/imgs/pedraBot.png"
        bot.aumentarPontos()
        pontosBot.innerText = bot.pontos
    }
    else if(player.mao === "tesoura" && bot.mao === "tesoura"){
        vencedorInfo.innerText = "Empate!!!"
        maoJogador.src = "./src/imgs/tesouraJogador.png"
        maoBot.src = "./src/imgs/tesouraBot.png"
    }
};

//Tela do jogador

const divTelaDoJogador = document.createElement("div");
divTelaDoJogador.classList.add("telaDoJogador");

const caixaNome = document.createElement("div");
caixaNome.classList.add("caixaNome");

const nomeDoJOgador = document.createElement("h2");
nomeDoJOgador.classList.add("nomeDojogador");

const caixaPontos = document.createElement("div");
caixaPontos.classList.add("caixaPontos");

const pontosDoJogador = document.createElement("h3");
pontosDoJogador.classList.add("pontosDoJogador");
pontosDoJogador.innerHTML = "Pontos do jogador: "

const pontosJogador = document.createElement("span")
pontosJogador.innerText = player.pontos;
pontosJogador.id = "pontosJogador"

pontosDoJogador.appendChild(pontosJogador);

const listaDeJogadas = document.createElement("ul");

const pedra = document.createElement("li");
pedra.innerText = "Pedra"
pedra.classList.add("maos")

pedra.addEventListener("click", event => {
    player.pedra()
    body.appendChild(modelContainerJogada)
})

const pedraJogador = document.createElement("img")
pedraJogador.classList.add("pedraJogador")
pedraJogador.src = "./src/imgs/pedraJogador.png"

pedra.appendChild(pedraJogador);

const papel = document.createElement("li");
papel.innerText = "Papel"
papel.classList.add("maos")

papel.addEventListener("click", event => {
    player.papel()
    body.appendChild(modelContainerJogada)
})

const papelJogador = document.createElement("img")
papelJogador.classList.add("papelJogador")
papelJogador.src = "./src/imgs/papelJogador.png"

papel.appendChild(papelJogador);

const tesoura = document.createElement("li");
tesoura.innerText = "Tesoura"
tesoura.classList.add("maos")

tesoura.addEventListener("click", event => {
    player.tesoura()
    body.appendChild(modelContainerJogada)
})

const tesouraJogador = document.createElement("img")
tesouraJogador.classList.add("tesouraJogador")
tesouraJogador.src = "./src/imgs/tesouraJogador.png"

tesoura.appendChild(tesouraJogador);

//Tela do bot

const divTelaDoBot = document.createElement("div");
divTelaDoBot.classList.add("telaDoBot");

const caixaNomeBot = document.createElement("div");
caixaNomeBot.classList.add("caixaNome");

const nomeDoBot = document.createElement("h2");
nomeDoBot.classList.add("nomeDojogador");
nomeDoBot.innerText = bot.nome;

const caixaPontosBot = document.createElement("div");
caixaPontosBot.classList.add("caixaPontos");

const pontosDoBot = document.createElement("h3");
pontosDoBot.classList.add("pontosDoJogador");
pontosDoBot.innerHTML = "Pontos do jogador: "

const pontosBot = document.createElement("span")
pontosBot.innerText = bot.pontos;
pontosBot.id = "pontosBot"

pontosDoBot.appendChild(pontosBot);

const listaDeJogadasBot = document.createElement("ul");

const pedraB = document.createElement("li");
pedraB.innerText = "Pedra"
pedraB.classList.add("maos")

const pedraBot = document.createElement("img")
pedraBot.classList.add("pedraJogador")
pedraBot.src = "./src/imgs/pedraBot.png"

pedraB.appendChild(pedraBot);

const papelB = document.createElement("li");
papelB.innerText = "Papel"
papelB.classList.add("maos")

const papelBot = document.createElement("img")
papelBot.classList.add("papelJogador")
papelBot.src = "./src/imgs/papelBot.png"

papelB.appendChild(papelBot);

const tesouraB = document.createElement("li");
tesouraB.innerText = "Tesoura"
tesouraB.classList.add("maos")

const tesouraBot = document.createElement("img")
tesouraBot.classList.add("tesouraJogador")
tesouraBot.src = "./src/imgs/tesouraBot.png"

tesouraB.appendChild(tesouraBot);

//Montando tudo 

listaDeJogadas.appendChild(pedra);
listaDeJogadas.appendChild(papel);
listaDeJogadas.appendChild(tesoura);

listaDeJogadasBot.appendChild(pedraB);
listaDeJogadasBot.appendChild(papelB);
listaDeJogadasBot.appendChild(tesouraB);

caixaNome.appendChild(nomeDoJOgador);
caixaPontos.appendChild(pontosDoJogador);

caixaNomeBot.appendChild(nomeDoBot);
caixaPontosBot.appendChild(pontosDoBot);

divTelaDoJogador.appendChild(caixaNome);
divTelaDoJogador.appendChild(caixaPontos);
divTelaDoJogador.appendChild(listaDeJogadas);

divTelaDoBot.appendChild(caixaNomeBot);
divTelaDoBot.appendChild(caixaPontosBot);
divTelaDoBot.appendChild(listaDeJogadasBot);

caixaJogo.appendChild(divTelaDoJogador);
caixaJogo.appendChild(divTelaDoBot);

body.appendChild(tituloDoJogo);

body.appendChild(caixaJogo);





