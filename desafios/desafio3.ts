// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let valorCampo : number = 0;

atualizarSaldo(0);

function somarAoSaldo(soma: number) {
    valorCampo += soma;
    atualizarSaldo(valorCampo);
}

function limparSaldo() {
    if (campoSaldo) {
        valorCampo = 0;
        campoSaldo.innerHTML = '';
    }
}

function atualizarSaldo(valor: number | string) {
    if (campoSaldo) {
        if (typeof valor === 'number') {
            campoSaldo.innerHTML = valor.toString();
        } else {
            campoSaldo.innerHTML = valor;
        }
    }
}

botaoAtualizar?.addEventListener('click', function () {
    if (soma)
        somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */