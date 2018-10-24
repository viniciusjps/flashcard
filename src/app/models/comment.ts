export class Comment {

  private id: number;
  private cardId: number;
  private message: string;
  private createdAt: Date;
  private edit: boolean;
  private author: string;
  private image: string;

  constructor(
    id: number,
    cardId: number,
    message: string,
    createdAt: Date,
    edit: boolean,
    author: string,
    image: string
  ) {
    this.id = id;
    this.cardId = cardId;
    this.message = message;
    this.createdAt = createdAt;
    this.edit = edit;
    this.author = author;
    this.image = image;
  }

  public getId(): number {
    return this.id;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getImage(): string {
    return this.image;
  }

  public getMessage(): string {
    return this.message;
  }

  public getDate(): Date {
    return this.creatAt;
  }

}
