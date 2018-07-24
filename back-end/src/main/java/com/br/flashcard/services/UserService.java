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
	private UserRepository userRepository;

	public List<User> getAll() {
		return this.userRepository.findAll();
	}

	public User getByEmail(String email) {
		Optional<User> user = this.userRepository.findById(email);
		checkExists(user);
		return user.get();
	}

	public User save(User user) {
		this.userRepository.save(user);
		return user;
	}

	public User update(User user, String email) {
		Optional<User> optUser = this.userRepository.findById(email);
		checkExists(optUser);
		User newUser = optUser.get();
		newUser.setEmail(user.getEmail());
		newUser.setPassword(user.getPassword());
		this.userRepository.save(newUser);
		return newUser;
	}
	
	public User delete(String email) {
		Optional<User> optUser = this.userRepository.findById(email);
		checkExists(optUser);
		User user = optUser.get();
		this.userRepository.delete(user);
		return user;
	}
	
	private void checkExists(Optional<User> user) {
		if (!user.isPresent()) {
			throw new RegisterNotFoundException("User not exists");
		}
	}

}
