package com.pmg.service;

import java.util.List;

import com.pmg.domain.IncomeVO;

public interface IncomeService {

	//public void userRegister(UserVO user) throws Exception;
	
	//public IncomeVO loginUserRead(IncomeVO income) throws Exception;
	
	  public void incomeRegister(IncomeVO income) throws Exception;
	
	  public List<IncomeVO> incomeDayRead(IncomeVO income) throws Exception;

	  public void incomeDayUpdate(IncomeVO income) throws Exception;
	  
	  public void incomeDayDelete( IncomeVO income) throws Exception;
	
	  public List<IncomeVO> incomeMonthRead(IncomeVO income) throws Exception;

	  public List<IncomeVO> incomeMonthAndDayRead(IncomeVO income) throws Exception;

	  public List<IncomeVO> incomeMonthAndDaySumRead(IncomeVO income) throws Exception;

	  
}
