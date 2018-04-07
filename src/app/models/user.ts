import { Card } from './card';


export class User {

    private username: string;
    private password: string;
    private cards: Card[];

    constructor (
        username: string,
        pswd: string
    ) {
        this.username = username;
        this.password = pswd;
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
    public addNewCard(discipline: string, question: string, answer: string, id: number, privacy: boolean): void {
        this.cards.push(new Card(discipline, question, answer, id + 1, this.getUsername(), privacy));
    }

    /**
     * Get card by ID
     * @param id Id
     */
    public getCard(id: number) {
        const array = this.cards;
        for (let i = 0; i < array.length; i++) {
            if (array[i].getId() === id) {
                return array[i];
            }
        }
        return null;
    }

    public getCards(): Card[] {
        return this.cards;
    }

}
