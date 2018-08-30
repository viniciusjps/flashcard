export class Card {

  private discipline: string;
  private question: string;
  private answer: string;
  private privacy: boolean;
  private result: boolean;

  private seeAnswer: boolean;
  private favorite: boolean;
  private id: number;

  constructor(
    discipline: string,
    question: string,
    answer: string,
    privacy: boolean
  ) {
    this.discipline = discipline;
    this.question = question;
    this.answer = answer;
    this.privacy = privacy;
    this.result = 'default';

    this.favorite = false;
    this.seeAnswer = false;
  }

  /**
   * getDiscipline
   */
  public getDiscipline(): string {
    return this.discipline;
  }

  /**
   * getQuestion
   */
  public getQuestion(): string {
    return this.question;
  }

  /**
   * getAnswer
   */
  public getAnswer(): string {
    return this.answer;
  }

  /**
   * getId
   */
  public getId(): number {
    return this.id;
  }

  /**
   * getSeeAnswer
   */
  public getSeeAnswer(): boolean {
    return this.seeAnswer;
  }

  /**
   * Set See Answer
   * @param value New value
   */
  public setSeeAnswer(value: boolean): boolean {
    return (this.seeAnswer = value);
  }

  /**
   * getFavorite
   */
  public getFavorite(): boolean {
    return this.favorite;
  }

  /**
   * Get result
   */
  public getResult(): boolean {
    return this.result;
  }

  /**
   * Set result
   * @param value New value
   */
  public setResult(value: boolean) {
    this.result = value;
  }

  /**
   * Get privacy
   */
  public getPrivacy(): boolean {
    return this.privacy;
  }

  /**
   * Set  privacy
   * @param value New value
   */
  public setPrivacy(value: boolean) {
    this.privacy = value;
  }
}
