package com.pmg.domain;


public class UserVO {
	
	private int id;
	private int grade_id;
	private String userId;
	private String userPassword;
	private String userName;
	private String userPhonNumber;
	private String userBirthday;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getGrade_id() {
		return grade_id;
	}
	public void setGrade_id(int grade_id) {
		this.grade_id = grade_id;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserPhonNumber() {
		return userPhonNumber;
	}
	public void setUserPhonNumber(String userPhonNumber) {
		this.userPhonNumber = userPhonNumber;
	}
	public String getUserBirthday() {
		return userBirthday;
	}
	public void setUserBirthday(String userBirthday) {
		this.userBirthday = userBirthday;
	}
		
}