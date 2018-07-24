package com.br.flashcard.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.flashcard.exceptions.RegisterNotFoundException;
import com.br.flashcard.models.Card;
import com.br.flashcard.models.HavingCards;
import com.br.flashcard.repository.HavingCardsRepository;

@Service
public class HavingCardsService {

	@Autowired
	private HavingCardsRepository hcRepository;

	public List<HavingCards> getAll() {
		return this.hcRepository.findAll();
	}

	public HavingCards getById(Long id) {
		Optional<HavingCards> hc = this.hcRepository.findById(id);
		checkExists(hc);
		return hc.get();
	}

	public HavingCards save(HavingCards hc) {
		this.hcRepository.save(hc);
		return hc;
	}

	public HavingCards update(HavingCards hc, Long id) {
		Optional<HavingCards> optHc = this.hcRepository.findById(id);
		checkExists(optHc);
		HavingCards newHC = optHc.get();
		newHC.setId(hc.getId());
		newHC.setCardId(hc.getCardId());
		newHC.setUserEmail(hc.getUserEmail());
		this.hcRepository.save(newHC);
		return newHC;
	}
	
	public HavingCards delete(Long id) {
		Optional<HavingCards> optHC = this.hcRepository.findById(id);
		checkExists(optHC);
		HavingCards hc = optHC.get();
		this.hcRepository.delete(hc);
		return hc;
	}

	private void checkExists(Optional<HavingCards> hc) {
		if (!hc.isPresent()) {
			throw new RegisterNotFoundException("This relationship not exists");
		}
	}

}
