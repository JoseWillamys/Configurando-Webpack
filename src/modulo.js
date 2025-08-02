const nome = 'Will';
const sobrenome = 'Silva';
const idade = 32;


//export {soma as default}
export default function soma(x, y) {
    return x + y;
}

export { nome, sobrenome, idade };

export class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
}