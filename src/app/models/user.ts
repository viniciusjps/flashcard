import { Card } from './card';


export class User {

    private username: string;
    private password: string;
    private email: string;
    private cards: Card[];

    constructor (
        username: string,
        pswd: string,
        email: string
    ) {
        this.username = username;
        this.password = pswd;
        this.email = email;
        this.cards = [];
    }

    /**
     * Get username
     */
    public getUsername(): string {
        return this.username;
    }

    public setUsername(value: string): void {
        this.username = value;
    }

    /**
     * getEmail
     */
    public getEmail(): string {
        return this.email;
    }

    public setEmail(value: string): void {
        this.email = value;
    }

    /**
     * Get Password
     */
    public getPassword(): string {
       return this.password;
    }

    public setPassword(value: string): void {
        this.password = value;
    }

    /**
     * addNewCard
     */
    public addNewCard(discipline: string, question: string, answer: string, id: number, privacy: boolean): void {
        this.cards.push(new Card(discipline, question, answer, id + 1, this, privacy));
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
