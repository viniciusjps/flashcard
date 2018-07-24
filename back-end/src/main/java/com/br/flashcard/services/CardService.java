package com.br.flashcard.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.flashcard.exceptions.RegisterNotFoundException;
import com.br.flashcard.models.Card;
import com.br.flashcard.repository.CardRepository;

@Service
public class CardService {

	@Autowired
	private CardRepository cardRepository;

	public List<Card> getAll() {
		return this.cardRepository.findAll();
	}

	public Card getById(Long id) {
		Optional<Card> card = this.cardRepository.findById(id);
		checkExists(card);
		return card.get();
	}

	public Card save(Card card) {
		this.cardRepository.save(card);
		return card;
	}
	
	public Card update(Card card, Long id) {
		Optional<Card> optCard = this.cardRepository.findById(id);
		checkExists(optCard);
		Card newCard = optCard.get();
		newCard.setId(card.getId());
		newCard.setAnswer(card.getAnswer());
		newCard.setDiscipline(card.getDiscipline());
		newCard.setPrivacy(card.isPrivacy());
		newCard.setQuestion(card.getQuestion());
		this.cardRepository.save(newCard);
		return newCard;
	}
	
	public Card delete(Long id) {
		Optional<Card> optCard = this.cardRepository.findById(id);
		checkExists(optCard);
		Card card = optCard.get();
		this.cardRepository.delete(card);
		return card;
	}

	private void checkExists(Optional<Card> card) {
		if (!card.isPresent()) {
			throw new RegisterNotFoundException("Card not exists");
		}
	}

}
