export class Comment {

  private id: number;
  private cardId: number;
  private message: string;
  private createdAt: Date;
  private edit: boolean;
  private author: string;
  private image: string;
  private email: string;

  private toEdit: boolean;

  constructor(
    id: number,
    cardId: number,
    message: string,
    createdAt: Date,
    edit: boolean,
    author: string,
    image: string,
    email: string
  ) {
    this.id = id;
    this.cardId = cardId;
    this.message = message;
    this.createdAt = createdAt;
    this.edit = edit;
    this.author = author;
    this.image = image;
    this.email = email;
    this.toEdit = false;
  }

  public getId(): number {
    return this.id;
  }

  public getCardId(): number {
    return this.cardId;
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
    return this.createdAt;
  }

  public getEdit(): boolean {
    return this.edit;
  }

  public getToEdit(): boolean {
    return this.toEdit;
  }

  public setToEdit(): void {
    this.toEdit = !this.toEdit;
  }

  public getEmail(): string {
    return this.email;
  }

}
