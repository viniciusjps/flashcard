package com.br.flashcard.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.br.flashcard.models.User;
import com.br.flashcard.services.UserService;

@RestController
@RequestMapping(value = "/api/user")
@CrossOrigin(origins = "*")
public class UserController {

	@Autowired
	private UserService userService;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public List<User> getAll() {
		return this.userService.getAll();
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	public User save(@RequestBody User user) {
		return this.userService.save(user);
	}

	@RequestMapping(value = "/{email}", method = RequestMethod.GET)
	public User getByEmail(@PathVariable("email") String email) {
		return this.userService.getByEmail(email);
	}

	@RequestMapping(value = "/{email}", method = RequestMethod.PUT)
	public ResponseEntity<User> update(@PathVariable("email") String email, @RequestBody User user) {
		User updateUser = this.userService.update(user, email);
		return new ResponseEntity<User>(updateUser, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/{email}", method = RequestMethod.DELETE)
	public ResponseEntity<User> delete(@PathVariable("email") String email) {
		User user = this.userService.delete(email);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

}
