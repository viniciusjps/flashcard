package com.br.flashcard.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "users")
public class User {

	@Column(name = "username")
	@NotNull(message = "Username can't be null")
	@NotEmpty(message = "Username can't be empty")
	private String username;

	@Column(name = "password")
	@NotNull(message = "Password can't be null")
	@NotEmpty(message = "Password can't be empty")
	private String password;

	@Id
	@Column(name = "email")
	@NotNull(message = "Email can't be null")
	@NotEmpty (message = "Email can't be empty")
	private String email;

	public User() {
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
