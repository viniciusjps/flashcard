import { Card } from './card';


export class User {

    private username: string;
    private password: string;
    private cards: Card[];
    private log: boolean;

    constructor (
        username: string,
        pswd: string
    ) {
        this.username = username;
        this.password = pswd;
        this.log = false;
        this.cards = [];
    }

    /**
     * Get username
     */
    public getUsername(): string {
        return this.username;
    }

    /**
     * Get Password
     */
    public getPassword(): string {
       return this.password;
    }

    /**
     * addNewCard
     */
    public addNewCard(discipline: string, question: string, answer: string): void {
        this.cards.push(new Card(discipline, question, answer, this.cards.length + 1));
    }

    public getCard(id: number) {
        return this.cards[id - 1];
    }

    public getCards(): Card[] {
        return this.cards;
    }

    public logar() {
        this.log = true;
    }

    public deslogar() {
        this.log = false;
    }

}
