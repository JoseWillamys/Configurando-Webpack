//import { nome as nomeCliente, sobrenome, idade, soma, Pessoa } from './modulo';
import soma, { nome as nomeCliente, sobrenome, idade, Pessoa } from './modulo';

const pessoa = {
    nome: nomeCliente,
    sobrenome: sobrenome,
    idade: idade
};

const cliente = new Pessoa(pessoa.nome, pessoa.sobrenome, pessoa.idade);

const resultaSoma = soma(2, 10);
console.log(resultaSoma);