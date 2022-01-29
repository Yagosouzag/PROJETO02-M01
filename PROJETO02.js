var prompt = require('prompt-sync')();

const escolhas = ['pedra', 'papel', 'tesoura'];
let Vitoriausuario = 0;
let Vitoriacomputador = 0;
console.log(
    `Hoje vamos jogar Jokenpõ, para escolher o que você irá jogar utilize 1 para pedra, 2 para papel e 3 para tesoura`,
);
console.log();
let computador = Math.floor(Math.random() * 3);
let nomeUsuario = prompt('Digite seu nome: ');
console.log();
let inicio1;
let usuario;
let inicio = prompt(`Deseja iniciar o jogo ${nomeUsuario} ? `);

while (inicio == 'sim' || inicio == 's') {
    console.log();
    let rodadas = prompt(
        `Defina o numero de rodadas que deseja jogar ${nomeUsuario}: `,
    );
    console.log();

    for (let i = 0; i < rodadas; i++) {
        console.log();
        console.log(`Inicio da rodada ${i + 1}`);
        usuario = prompt('Digite o que voce irá jogar:');
        console.log(` ${nomeUsuario} selecionou ${escolhas[usuario - 1]}`);
        console.log(`Computador jogou ${escolhas[computador]}`);
        console.log();

        while (usuario < 1 || usuario > 3) {
            console.log('Número invalido!');
            usuario = prompt('Digite Novamente:');
            console.log();
        }

        if (usuario == 1 && computador == 1) {
            console.log('O computador ganhou!');
            console.log();
            Vitoriacomputador++;
        } else if (usuario == 2 && computador == 0) {
            console.log(`${nomeUsuario} ganhou !`);
            console.log();
            Vitoriausuario++;
        } else if (usuario == 2 && computador == 2) {
            console.log('O computador ganhou!');
            console.log();
            Vitoriacomputador++;
        } else if (usuario == 3 && computador == 1) {
            console.log(`${nomeUsuario} ganhou!`);
            console.log();
            Vitoriausuario++;
        } else if (usuario == 3 && computador == 0) {
            console.log('O computador ganhou!');
            console.log();
            Vitoriacomputador++;
        } else if (usuario == 1 && computador == 2) {
            console.log(`${nomeUsuario} ganhou!`);
            console.log();
            Vitoriausuario++;
        } else if (usuario == 2 && computador == 1) {
            console.log('EMPATE!!');
            console.log();
            Vitoriacomputador++;
            Vitoriausuario++;
        } else if (usuario == 1 && computador == 0) {
            console.log('EMPATE!!');
            console.log();
            Vitoriacomputador++;
            Vitoriausuario++;
        } else if (usuario == 3 && computador == 2) {
            console.log('EMPATE!!');
            console.log();
            Vitoriacomputador++;
            Vitoriausuario++;
        }
    }

    console.log(`As rodadas terminaram ${nomeUsuario}`);
    console.log();
    console.log(`${nomeUsuario} ganhou ${Vitoriausuario} rodadas!`);
    console.log();
    console.log(`Computador ganhou ${Vitoriacomputador} rodadas!`);
    console.log();

    if (Vitoriacomputador > Vitoriausuario) {
        console.log(`Computador foi o grande campeão! `);
    } else if (Vitoriausuario > Vitoriacomputador) {
        console.log(`${nomeUsuario} foi o grande campeão!`);
    } else {
        console.log('O jogo ficou empatado!');
    }

    console.log();
    inicio = prompt(`Deseja jogar novamente ${nomeUsuario}? `);
}
