export class User {

    private username: string;
    private password: string;
    private log: boolean;

    constructor (
        username: string,
        pswd: string
    ) {
        this.username = username;
        this.password = pswd;
        this.log = false;
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
     * Get log
     */
    public getLog(): boolean {
       return this.log;
    }

    public logar() {
        this.log = true;
    }

    public deslogar() {
        this.log = false;
    }

}
