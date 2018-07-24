package com.br.flashcard.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.br.flashcard.models.HavingCards;

@Repository
@Transactional
public interface HavingCardsRepository extends JpaRepository<HavingCards, Long>{

}
