export class Card {

  // Backend
  private id: number;
  private discipline: string;
  private question: string;
  private answer: string;
  private privacy: boolean;
  private result: string;
  private author: string;
  private image: string;

  private seeAnswer: boolean;
  private favorite: boolean;

  constructor(
    id: number,
    discipline: string,
    question: string,
    answer: string,
    privacy: boolean,
    author: string,
    image: string
  ) {
    this.id = id;
    this.discipline = discipline;
    this.question = question;
    this.answer = answer;
    this.privacy = privacy;
    this.result = 'default';
    this.author = author;
    this.image = image;

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
  public getResult(): string {
    return this.result;
  }

  /**
   * Set result
   * @param value New value
   */
  public setResult(value: string) {
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

    /**
   * Get author's email
   */
  public getAuthor(): string {
    return this.author;
  }

  /**
   * Set  author's email
   * @param value New value
   */
  public setAuthor(value: string) {
    this.author = value;
  }

  /**
   * Get image url
   */
  public getImage(): string {
    return this.image;
  }

  /**
   * Set image url
   * @param value New value
   */
  public setImage(value: string) {
    this.image = value;
  }

}
