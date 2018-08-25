import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { Card } from './../models/card';
import { User } from '../models/user';

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
   * @param email Email
   * @param discipline Discipline
   * @param question Question
   * @param answer Answer
   */
  public addNewCard(email: string, discipline: string, question: string, answer: string, privacy: boolean): void {
    let user: User = null;
    this.getUser(email).then(data => {
      user = data;
    }).then(a => {
      if (user != null || user !== undefined) {
        user.addNewCard(discipline, question, answer, privacy);
      }
    });
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
    return null;
  }

  /**
   * Get all public cards
   */
  private getAllCards(): Card[] {
    return null;
  }

  /**
   * Get the cards by email
   * @param email Email
   */
  public getCards(email: string): Card[] {
    return null;
  }

  /**
   * Get the cards by id
   * @param email Email
   * @param id Id
   */
  public getCard(email: string, id: number): Card {
    let user: User = null;
    let card: Card = null;
    this.getUser(email)
      .then(data => {
        user = data;
      }).then(c => {
        card = user.getCard(id);
      });
    return card;
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
    let user: User = null;
    return this.getUser(email).then(data => {
      user = data;
    }).then(a => {
      this.user_logado = user;
      localStorage.setItem('isLogged', 'true');
      localStorage.setItem('username', this.user_logado.getUsername());
      localStorage.setItem('email', this.user_logado.getEmail());
      localStorage.setItem('image', this.user_logado.getImage());
    });
  }

  /**
   * Log out
   */
  public logOut(): void {
    this.user_logado = null;
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('image');
    localStorage.clear();
    localStorage.setItem('isLogged', 'false');
  }

  public navigate(address: string): void {
    this.router.navigate([address]);
  }

  public getRouter(): Router {
    return this.router;
  }

}
