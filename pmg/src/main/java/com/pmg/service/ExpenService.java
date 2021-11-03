package com.pmg.service;

import java.util.List;

import com.pmg.domain.ExpenVO;

public interface ExpenService {
	
	  public void expenRegister(ExpenVO expen) throws Exception;
	
	  public List<ExpenVO> expenMonthRead(ExpenVO expen) throws Exception;
	  
	  public List<ExpenVO> expenMonthAndDayRead(ExpenVO expen) throws Exception;

	  public List<ExpenVO> expenMonthAndDaySumRead(ExpenVO expen) throws Exception;
	  
	  public List<ExpenVO> expenDayRead(ExpenVO expen) throws Exception;
	  
	  public void expenDayUpdate(ExpenVO expen) throws Exception;
	  
	  public void expenDayDelete(int id) throws Exception;
	  
	  public List<ExpenVO> expenDateSearch(ExpenVO expen) throws Exception;

	  
	
}
