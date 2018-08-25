import { Card } from './card';

export class User {
  private username: string;
  private email: string;
  private image: string;
  private cards: Card[];

  constructor(username: string, email: string, image: string) {
    this.username = username;
    this.email = email;
    this.image = image;
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
   * Get Image
   */
  public getImage(): string {
    return this.image;
  }

  public setImage(value: string): void {
    this.image = value;
  }

  /**
   * addNewCard
   */
  public addNewCard(
    discipline: string,
    question: string,
    answer: string,
    privacy: boolean
  ): void {
    this.addCard(discipline, question, answer, privacy).then(resp => {
      this.cards.push(new Card(discipline, question, answer, privacy));
    });
  }

  public addCard(
    discipline: string,
    question: string,
    answer: string,
    privacy: boolean
  ) {
    return fetch('', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        discipline: discipline,
        question: question,
        answer: answer,
        privacy: privacy
      })
    });
  }

  /**
   * Get card by ID
   * @param id Id
   */
  public getCard(id: number) {
    return null;
  }

  public getCards(): Card[] {
    return this.cards;
  }
}
