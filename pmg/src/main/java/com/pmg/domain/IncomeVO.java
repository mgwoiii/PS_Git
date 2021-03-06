package com.pmg.domain;

import java.sql.Date;

public class IncomeVO {
	
	private int id;
	private int className_id;
	private int reserveType_id;

	private int roomPrice;
	private int roomType_id;
	
	private int bbqPrice;
	private int bbqType_id;
	
	private int extraPeoplePrice;
	private int extraPeopleType_id;

	private int totalPrice;

	private String note;
	private String guestName;
	private String IncomeDate;
	
	private int MonthDate;
	private int MonthSum;
	
	private String IncomeDateStart;
	private String IncomeDateEnd;
	
	
	private int DayDate;
	private int DaySum;
	
	private String DateDate;
	private int DateSum;
	
	
	
	
	public String getDateDate() {
		return DateDate;
	}
	public void setDateDate(String dateDate) {
		DateDate = dateDate;
	}
	
	public int getDateSum() {
		return DateSum;
	}
	public void setDateSum(int dateSum) {
		DateSum = dateSum;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getClassName_id() {
		return className_id;
	}
	public void setClassName_id(int className_id) {
		this.className_id = className_id;
	}
	public int getReserveType_id() {
		return reserveType_id;
	}
	public void setReserveType_id(int reserveType_id) {
		this.reserveType_id = reserveType_id;
	}
	public int getRoomPrice() {
		return roomPrice;
	}
	public void setRoomPrice(int roomPrice) {
		this.roomPrice = roomPrice;
	}
	public int getRoomType_id() {
		return roomType_id;
	}
	public void setRoomType_id(int roomType_id) {
		this.roomType_id = roomType_id;
	}
	public int getBbqPrice() {
		return bbqPrice;
	}
	public void setBbqPrice(int bbqPrice) {
		this.bbqPrice = bbqPrice;
	}
	public int getBbqType_id() {
		return bbqType_id;
	}
	public void setBbqType_id(int bbqType_id) {
		this.bbqType_id = bbqType_id;
	}
	public int getExtraPeoplePrice() {
		return extraPeoplePrice;
	}
	public void setExtraPeoplePrice(int extraPeoplePrice) {
		this.extraPeoplePrice = extraPeoplePrice;
	}
	public int getExtraPeopleType_id() {
		return extraPeopleType_id;
	}
	public void setExtraPeopleType_id(int extraPeopleType_id) {
		this.extraPeopleType_id = extraPeopleType_id;
	}
	public int getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(int totalPrice) {
		this.totalPrice = totalPrice;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public String getGuestName() {
		return guestName;
	}
	public void setGuestName(String guestName) {
		this.guestName = guestName;
	}
	public String getIncomeDate() {
		return IncomeDate;
	}
	public void setIncomeDate(String incomeDate) {
		IncomeDate = incomeDate;
	}
	public int getMonthDate() {
		return MonthDate;
	}
	public void setMonthDate(int monthDate) {
		MonthDate = monthDate;
	}
	public int getMonthSum() {
		return MonthSum;
	}
	public void setMonthSum(int monthSum) {
		MonthSum = monthSum;
	}
	public String getIncomeDateStart() {
		return IncomeDateStart;
	}
	public void setIncomeDateStart(String incomeDateStart) {
		IncomeDateStart = incomeDateStart;
	}
	public String getIncomeDateEnd() {
		return IncomeDateEnd;
	}
	public void setIncomeDateEnd(String incomeDateEnd) {
		IncomeDateEnd = incomeDateEnd;
	}
	public int getDayDate() {
		return DayDate;
	}
	public void setDayDate(int dayDate) {
		DayDate = dayDate;
	}
	public int getDaySum() {
		return DaySum;
	}
	public void setDaySum(int daySum) {
		DaySum = daySum;
	}
	
	
	

}
