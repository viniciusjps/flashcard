export class Card {

    private discipline: string;
    private question: string;
    private answer: string;
    private seeAnswer: boolean;
    private favorite: boolean;
    private rating: number;
    private id: number;
    private author: string;
    private result: boolean;
    private privacy: boolean;

    constructor(
        discipline: string,
        question: string,
        answer: string,
        id: number,
        username: string,
        privacy: boolean
    ) {
        this.id = id;
        this.rating = 0;
        this.answer = answer;
        this.favorite = false;
        this.question = question;
        this.seeAnswer = false;
        this.discipline = discipline;
        this.author = username;
        this.result = null;
        this.privacy = privacy;
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

    /**
     * Get card's author
     */
    public getAuthor() {
        return this.author;
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
