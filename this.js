function calculaIdade(anos) {
	
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
		
}

const pessoa1 = {
	nome: 'Andre',
	idade: 21,
};

const pessoa2 = {
	nome: 'Lucas',
	idade: 31,
};

const pessoa3 = {
	nome: 'Martins',
	idade: 55,
};
const pessoa4 = {
	nome: 'Val',
	idade: 52,
};

console.log(calculaIdade.call(pessoa1, 20));
console.log(calculaIdade.apply(pessoa2, [20]));
console.log(calculaIdade.call(pessoa3, 20));
console.log(calculaIdade.apply(pessoa4, [20]));