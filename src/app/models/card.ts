export class Card {
    private disciplina: string;
    private pergunta: string;
    private resposta: string;
    private verResposta: boolean;
    private id;

    constructor(
        disciplina: string,
        pergunta: string,
        resposta: string,
        visibilidade: boolean,
        id: number
    ) {
        this.disciplina = disciplina;
        this.pergunta = pergunta;
        this.resposta = resposta;
        this.verResposta = visibilidade;
        this.id = id;
    }
}
