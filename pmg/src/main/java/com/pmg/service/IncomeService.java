package com.pmg.service;

import java.util.List;

import com.pmg.domain.IncomeVO;

public interface IncomeService {

	//public void userRegister(UserVO user) throws Exception;
	
	//public UserVO loginUserRead(UserVO user) throws Exception;
	
	  public void incomeRegister(IncomeVO income) throws Exception;
	
	  public List<IncomeVO> incomeDayRead(IncomeVO income) throws Exception;

	  
}
