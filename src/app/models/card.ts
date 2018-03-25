export class Card {

    private discipline: string;
    private question: string;
    private answer: string;
    private seeAnswer: boolean;
    private favorite: boolean;
    private rating: number;
    private id: number;

    constructor(
        discipline: string,
        question: string,
        answer: string,
        id: number
    ) {
        this.id = id;
        this.rating = 0;
        this.answer = answer;
        this.favorite = false;
        this.question = question;
        this.seeAnswer = false;
        this.discipline = discipline;
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
     * getRating
     */
    public getRating(): number {
        return this.rating;
    }

    /**
     * addRating
     */
    public addRating(): void {
        if (this.favorite === false) {
            this.rating += 1;
            this.favorite = true;
        } else {
            this.rating -= 1;
            this.favorite = false;
        }
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
        return this.seeAnswer = value;
    }

    /**
     * getFavorite
     */
    public getFavorite(): boolean {
        return this.favorite;
    }

}
