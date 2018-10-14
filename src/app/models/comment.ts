export class Comment {

  private id: Number;
  private cardId: Number;
  private message: String;
  private createdAt: Date;
  private author: String;
  private image: String;

  constructor(
    id: Number,
    cardId: Number,
    message: String,
    createdAt: Date,
    author: String,
    image: String
  ) {
    this.id = id;
    this.cardId = cardId;
    this.message = message;
    this.createdAt = createdAt;
    this.author = author;
    this.image = image;
  }



}
