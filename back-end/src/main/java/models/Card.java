package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import enums.Discipline;

@Entity
@Table(name = "cards")
public class Card {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(name = "discipline")
	@NotNull(message = "Discipline can't be null")
	@NotEmpty(message = "Discipline can't be empty")
	private Discipline discipline;

	@Column(name = "question")
	@NotNull(message = "Question can't be null")
	@NotEmpty(message = "Question can't be empty")
	private String question;

	@Column(name = "answer")
	@NotNull(message = "Answer can't be null")
	@NotEmpty(message = "Answer can't be empty")
	private String answer;

	@Column(name = "author")
	@NotNull(message = "User can't be null")
	@NotEmpty(message = "User can't be empty")
	private User author;

	@Column(name = "privacy")
	@NotEmpty(message = "Privacy can't be empty")
	private boolean privacy;

	/*
	 * private boolean seeAnswer; private boolean favorite; private boolean result;
	 * private int rating;
	 * 
	 */

	public Card() {
	}

	public Discipline getDiscipline() {
		return discipline;
	}

	public void setDiscipline(Discipline discipline) {
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

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getAuthor() {
		return author;
	}

	public void setAuthor(User author) {
		this.author = author;
	}

	public boolean isPrivacy() {
		return privacy;
	}

	public void setPrivacy(boolean privacy) {
		this.privacy = privacy;
	}

}
