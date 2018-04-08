import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { Card } from './../models/card';
import { User } from './../models/user';

@Injectable()
export class ControllerService {

  private users: User[];
  private user_logado: User;

  constructor(
    private router: Router
  ) {
    this.users = [];
    this.user_logado = null;
  }

  /**
   * Add a new card
   * @param username Username
   * @param discipline Discipline
   * @param question Question
   * @param answer Answer
   */
  public addNewCard(username: string, discipline: string, question: string, answer: string, privacy: boolean): void {
    const user = this.getUser(username);
    if (user != null || user !== undefined) {
      user.addNewCard(discipline, question, answer, this.getAllCards().length, privacy);
    }
  }

  /**
   * Add a new user
   * @param username Username
   * @param password Password
   */
  public addNewUser(username: string, password: string): void {
    if (username.trim().length !== 0 && password.trim().length !== 0) {
      const user = this.getUser(username);
      if (user == null || user === undefined) {
        this.users.push(new User(username, password));
      }
    }
  }

  /**
   * Get user by username
   * @param username Username
   */
  public getUser(username: string): User {
    if (username != null || username !== undefined) {
      for (let index = 0; index < this.users.length; index++) {
        if (this.users[index].getUsername() === username) {
          return this.users[index];
        }
      }
    }
    return null;
  }

  /**
   * Get all users
   */
  public getUsers(): User[] {
    return this.users;
  }

  /**
   * Get all public cards
   */
  public getAllPublicCards(): Card[] {
    const array: Card[] = [];
    for (let index = 0; index < this.users.length; index++) {
      const user = this.users[index];
      const cards = user.getCards();
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].getPrivacy()) {
          array.push(cards[i]);
        }
      }
    }
    return array;
  }

  /**
   * Get all public cards
   */
  private getAllCards(): Card[] {
    const array: Card[] = [];
    for (let index = 0; index < this.users.length; index++) {
      const user = this.users[index];
      const cards = user.getCards();
      for (let i = 0; i < cards.length; i++) {
        array.push(cards[i]);
      }
    }
    return array;
  }

  /**
   * Get the cards by username
   * @param username Username
   */
  public getCards(username: string): Card[] {
    const user = this.getUser(username);
    if (user != null || user !== undefined) {
      return this.getUser(username).getCards();
    }
  }

  /**
   * Get the cards by id
   * @param username Username
   * @param id Id
   */
  public getCard(username: string, id: number): Card {
    const user = this.getUser(username);
    return user.getCard(id);
  }

  /**
   * Get user logado
   */
  public getUserLogado(): User {
    return this.user_logado;
  }

  /**
   * Login
   * @param username Username
   */
  public logIn(username: string): void {
    const user = this.getUser(username);
    if (user != null || user !== undefined) {
      this.user_logado = user;
    }
  }

  /**
   * Log out
   */
  public logOut(): void {
    const user = this.user_logado;
    if (user != null || user !== undefined) {
      this.user_logado = null;
    }
  }

  public navigate(address: string): void {
    this.router.navigate([address]);
  }

  public getRouter(): Router {
    return this.router;
  }


}
