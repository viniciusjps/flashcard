package com.br.flashcard.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.flashcard.exceptions.RegisterNotFoundException;
import com.br.flashcard.models.User;
import com.br.flashcard.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;

	public List<User> getAll() {
		return this.repository.findAll();
	}

	public User getByUsername(String username) {
		Optional<User> user = this.repository.findById(username);
		checkExists(user);
		
		return user.get();
	}

	public User save(User user) {
		this.repository.save(user);
		return user;
	}

	public User update(User user, String username) {
		Optional<User> optUser = this.repository.findById(username);
		checkExists(optUser);
		
		User newUser = optUser.get();
		//newUser.setCards(user.getCards());
		newUser.setEmail(user.getEmail());
		newUser.setPassword(user.getPassword());
		this.repository.save(newUser);
		return newUser;
	}
	
	public User delete(String username) {
		Optional<User> optUser = this.repository.findById(username);
		checkExists(optUser);
		
		User user = optUser.get();
		this.repository.delete(user);
		return user;
	}
	
	private void checkExists(Optional<User> user) {
		if (!user.isPresent()) {
			throw new RegisterNotFoundException("User not exists");
		}
	}

}
