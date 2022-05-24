const ALUNOS = [
    {
		nome: 'Andre',
		nota: 10,
		turma: 'A',
	},
    {
		nome: 'Felipe',
		nota: 5,
		turma: 'A',
	},
    {
		nome: 'Rodrigo',
		nota: 7,
		turma: 'A',
	},
    {
        nome: 'Julio',
		nota: 4,
		turma: 'A',
    },
    {
        nome: 'Julie',
		nota: 9,
		turma: 'A',
    },
];

function alunosAprovados (ALUNOS,media) {
    
    var aprovados = [];

    for (var index = 0; index < ALUNOS.length; index++) {
        var { nota, nome } = ALUNOS[index];

        if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;

}

console.log(alunosAprovados(ALUNOS, 5));