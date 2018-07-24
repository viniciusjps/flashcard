package com.br.flashcard.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.br.flashcard.enums.Discipline;

@Entity
@Table(name = "cards")
public class Card {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(name = "discipline")
	@NotNull(message = "Discipline can't be null")
	@NotEmpty(message = "Discipline can't be empty")
	private String discipline;

	@Column(name = "question")
	@NotNull(message = "Question can't be null")
	@NotEmpty(message = "Question can't be empty")
	private String question;

	@Column(name = "answer")
	@NotNull(message = "Answer can't be null")
	@NotEmpty(message = "Answer can't be empty")
	private String answer;

	@Column(name = "privacy")
	@NotEmpty(message = "Privacy can't be empty")
	private Boolean privacy;

	public Card() {
	}

	public String getDiscipline() {
		return discipline;
	}

	public void setDiscipline(String discipline) {
		this.discipline = discipline;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Boolean isPrivacy() {
		return privacy;
	}

	public void setPrivacy(Boolean privacy) {
		this.privacy = privacy;
	}

}
