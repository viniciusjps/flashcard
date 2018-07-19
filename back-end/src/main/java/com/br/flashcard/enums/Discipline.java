package com.br.flashcard.enums;

public enum Discipline {
	
	LP1("Laboratório de Programação I"),
	LP2("Laboratório de Programação II"),
	OAC("Organização e Arquitetura de Computadores"),
	LOAC("Laboratório de Organização e Arquitetura de Computadores"),
	PSOFT("Projeto de Software");
	
	private final String status;
	
	Discipline(String status) {
		this.status = status;
	}
	
	private String getDisciplineValue() {
		return this.status;
	}

}
