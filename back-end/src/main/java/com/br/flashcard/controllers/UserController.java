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
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class UserController {

	@Autowired
	private UserService userService;

	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public List<User> getAll() {
		return this.userService.getAll();
	}

	@RequestMapping(value = "/user", method = RequestMethod.POST)
	public User save(@RequestBody User user) {
		return this.userService.save(user);
	}

	@RequestMapping(value = "/user/{username}", method = RequestMethod.GET)
	public User getByUsername(@PathVariable("username") String username) {
		return this.userService.getByUsername(username);
	}

	@RequestMapping(value = "/user/{username}", method = RequestMethod.PUT)
	public ResponseEntity<User> update(@PathVariable("username") String username, @RequestBody User user) {
		User updateUser = this.userService.update(user, username);
		return new ResponseEntity<User>(updateUser, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/user/{username}", method = RequestMethod.DELETE)
	public ResponseEntity<User> delete(@PathVariable("username") String username) {
		User user = this.userService.delete(username);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

}
