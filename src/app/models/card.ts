export class Card {
    private disciplina: string;
    private pergunta: string;
    private resposta: string;

    constructor(disciplina: string, pergunta: string, resposta: string) {
        this.disciplina = disciplina;
        this.pergunta = pergunta;
        this.resposta = resposta;
    }
}
