package com.pmg.domain;

import java.sql.Date;

public class ExpenVO {
	
	private int id;
	private String expenNote;
	private int expenPrice;
	private Date expenDate;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getExpenNote() {
		return expenNote;
	}
	public void setExpenNote(String expenNote) {
		this.expenNote = expenNote;
	}
	public int getExpenPrice() {
		return expenPrice;
	}
	public void setExpenPrice(int expenPrice) {
		this.expenPrice = expenPrice;
	}
	public Date getExpenDate() {
		return expenDate;
	}
	public void setExpenDate(Date expenDate) {
		this.expenDate = expenDate;
	}
	
	

}
