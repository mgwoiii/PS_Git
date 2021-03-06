package com.pmg.domain;

import java.sql.Date;

public class ExpenVO {
	
	private int id;
	private String expenNote;
	private int expenPrice;
	private String expenDate;
	
	private String expenDateStart;
	private String expenDateEnd;
	private int monthDate;
	private int monthSum;
	
	private String DayDate;
	private int DaySum;
	
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
	public String getExpenDate() {
		return expenDate;
	}
	public void setExpenDate(String expenDate) {
		this.expenDate = expenDate;
	}
	public String getExpenDateStart() {
		return expenDateStart;
	}
	public void setExpenDateStart(String expenDateStart) {
		this.expenDateStart = expenDateStart;
	}
	public String getExpenDateEnd() {
		return expenDateEnd;
	}
	public void setExpenDateEnd(String expenDateEnd) {
		this.expenDateEnd = expenDateEnd;
	}
	public int getMonthDate() {
		return monthDate;
	}
	public void setMonthDate(int monthDate) {
		this.monthDate = monthDate;
	}
	public int getMonthSum() {
		return monthSum;
	}
	public void setMonthSum(int monthSum) {
		this.monthSum = monthSum;
	}
	public String getDayDate() {
		return DayDate;
	}
	public void setDayDate(String dayDate) {
		DayDate = dayDate;
	}
	public int getDaySum() {
		return DaySum;
	}
	public void setDaySum(int daySum) {
		DaySum = daySum;
	}
	
	
}
