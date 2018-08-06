import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { Card } from './../models/card';

@Injectable()
export class ControllerService {

  private users;
  private user_logado;

  constructor(
    private router: Router
  ) {
    this.users = [{}];
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
   * Add new user and log-in
   * @param username Username
   * @param email Email
   * @param image Url image
   */
  public log(username: string, email: string, image: string): void {
    let response = {};
    this.getUser(email)
    .then(data => {
      response = data;
    })
    .then(a => {
      if (!response.status) {
        this.addUser(username, email, image);
      }
    })
    .then(a => {
      this.logIn(email)
      .then(a => {
        this.navigate('/perfil');
      });
    });
  }

  /**
   * Add new user
   * @param username Username
   * @param email Email
   * @param image Url Image
   */
  public addUser(username, email, image) {
    return fetch('', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: username,
        email: email,
        image: image
      })
    });
  }

  /**
   * Get user by Email
   * @param email Email
   */
  public getUser(email: string) {
    return fetch('http://api-flashcard.herokuapp.com/api/user/' + email).then(res => res.json());
  }

  /**
   * Get all users
   */
  public getUsers() {
    return fetch('http://api-flashcard.herokuapp.com/api/user/').then(res => res.json());
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
   * Get the cards by email
   * @param email Email
   */
  public getCards(email: string): Card[] {
    const user = this.getUser(email);
    if (user != null || user !== undefined) {
      return this.getUser(email).getCards();
    }
  }

  /**
   * Get the cards by id
   * @param email Email
   * @param id Id
   */
  public getCard(email: string, id: number): Card {
    const user = this.getUser(email);
    return user.getCard(id);
  }

  /**
   * Get user logado
   */
  public getUserLogado() {
    return this.user_logado;
  }

  /**
   * Login
   * @param email Email
   */
  public logIn(email: string) {
    let user = '';
    return this.getUser(email).then(data => {
      user = data;
    }).then(a => {
      this.user_logado = user;
      localStorage.setItem('isLogged', 'true');
      localStorage.setItem('username', this.user_logado.username);
      localStorage.setItem('email', this.user_logado.email);
      localStorage.setItem('image', this.user_logado.image);
    });
  }

  /**
   * Log out
   */
  public logOut(): void {
    this.user_logado = null;
    localStorage.setItem('isLogged', 'false');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('image');
  }

  public navigate(address: string): void {
    this.router.navigate([address]);
  }

  public getRouter(): Router {
    return this.router;
  }

}
